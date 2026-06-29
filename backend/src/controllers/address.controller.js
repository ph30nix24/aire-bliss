import Address from "../models/address.model.js";

/**
 * @desc    Add a new address for the authenticated user
 * @route   POST /api/address
 * @access  Private
 *
 * @description
 * Creates a new address associated with the logged-in user.
 * If the user is adding their first address, it is automatically
 * marked as the default address. If the request explicitly sets
 * `isDefault` to true, any existing default address for the user
 * is unset before creating the new one.
 *
 * @returns {Object} 201 - Newly created address
 * @returns {Object} 403 - Missing Fields
 * @returns {Object} 400 - Validation error or invalid request data
 * @returns {Object} 500 - Internal server error
 */
export const addAddress = async (req, res) => {
    try {
        const { name, phoneNo, alternatePhoneNo, addressLine1, addressLine2, landmark, city, state, pincode, addressType } = req.body;

        if ( !name || !phoneNo || !addressLine1 || !city || !state || !pincode) {
            return res.state(403).json({
                success: false,
                message: "Missing fields"
            })

        }
        // Check if the user already has any addresses
        const addressCount = await Address.countDocuments({ user: req.user._id });

        let isDefault = req.body.isDefault || false;

        // First address is always the default
        if (addressCount === 0) {
            isDefault = true;
        }



        // If this address is being set as default,
        // remove default status from all other addresses
        if (isDefault) {
            await Address.updateMany(
                { user: userId },
                { $set: { isDefault: false } }
            );
        }

        const address = await Address.create({
            user: req.user._id,
            fullName: name,
            mobileNumber: phoneNo,
            alternateMobileNumber: alternatePhoneNo,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            landmark: landmark,
            city: city,
            state: state,
            pincode: pincode,
            addressType: addressType,
            isDefault,
        });

        return res.status(201).json({
            success: true,
            message: "Address added successfully.",
            address,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to add address.",
        });
    }
};