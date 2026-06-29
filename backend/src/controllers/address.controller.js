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

        const addresses = await Address.find({ user: req.user._id })
        return res.status(201).json({
            success: true,
            message: "Address added successfully.",
            addresses,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to add address.",
        });
    }
};

/**
 * @desc    Get all addresses of the authenticated user
 * @route   GET /api/address
 * @access  Private
 *
 * @description
 * Retrieves all addresses associated with the logged-in user.
 * Addresses are sorted with the default address first, followed
 * by the most recently created addresses.
 *
 * @returns {Object} 200 - List of user addresses
 * @returns {Object} 500 - Internal server error
 */
export const getUserAddresses = async (req, res) => {
    try {
        const addresses = await Address.find({
            user: req.user._id,
        }).sort({
            isDefault: -1,
            createdAt: -1,
        });
        return res.status(200).json({
            success: true,
            count: addresses.length || 0,
            addresses: addresses || [],
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch addresses.",
        });
    }
};


/**
 * @desc    Get a single address of the authenticated user
 * @route   GET /api/address/:id
 * @access  Private
 *
 * @description
 * Retrieves a specific address by its ID. The address must belong
 * to the authenticated user; otherwise, a 404 response is returned.
 *
 * @returns {Object} 200 - Address retrieved successfully
 * @returns {Object} 404 - Address not found
 * @returns {Object} 500 - Internal server error
 */
export const getSingleAddress = async (req, res) => {
    try {
        const { id } = req.params;

        const address = await Address.findOne({
            _id: id,
            user: req.user._id,
        });

        if (!address) {
            return res.status(404).json({
                success: false,
                message: "Address not found.",
            });
        }

        return res.status(200).json({
            success: true,
            address,
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch address.",
        });
    }
};