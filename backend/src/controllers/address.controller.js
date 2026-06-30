import Address from "../models/address.model.js";

/**
 * @desc    Add a new address for the authenticated user
 * @route   POST /aire-bliss/user/address/
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

        if (!name || !phoneNo || !addressLine1 || !city || !state || !pincode) {
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
            name: name,
            phoneNo: phoneNo,
            alternatePhoneNo: alternatePhoneNo,
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
 * @route   GET /aire-bliss/user/address/
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
 * @route   GET /aire-bliss/user/address/:id
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




/**
 * @desc    Update an existing address of the authenticated user
 * @route   PUT /aire-bliss/user/address/:id
 * @access  Private
 *
 * @description
 * Updates an address belonging to the authenticated user. Only the
 * allowed fields can be modified. If the address is marked as the
 * default, any other default address for the user is unset to ensure
 * there is only one default address.
 *
 * @returns {Object} 200 - Address updated successfully
 * @returns {Object} 404 - Address not found
 * @returns {Object} 500 - Internal server error
 */
export const updateAddress = async (req, res) => {
    try {
        const { name, phoneNo, alternatePhoneNo, addressLine1, addressLine2, landmark, city, state, pincode, addressType } = req.body;

        const upadatedAddress = await Address.findByIdAndUpdate(
            req.params.id,
            {
                #set: {
                    ...(name !== undefined && { name }),
                    ...(phoneNo !== undefined && { phoneNo }),
                    ...(alternatePhoneNo !== undefined && { alternatePhoneNo }),
                    ...(addressLine1 !== undefined && { addressLine1 }),
                    ...(addressLine2 !== undefined && { addressLine2 }),
                    ...(landmark !== undefined && { landmark }),
                    ...(city !== undefined && { city }),
                    ...(state !== undefined && { state }),
                    ...(pincode !== undefined && { pincode }),
                    ...(addressType !== undefined && { addressType })
                },
            },
            {
                new: true,
                runValidators: true,
            }
        )

        if(!upadatedAddress) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        const addresses = await Address.find({ user: req.user._id })

        return res.status(200).json({
            success: true,
            message: "Address updated successfully.",
            addresses,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to update address.",
        });
    }
};



/**
 * @desc    Delete an address of the authenticated user
 * @route   DELETE /aire-bliss/user/address/:id
 * @access  Private
 *
 * @description
 * Deletes an address belonging to the authenticated user.
 * If the deleted address is the user's default address and
 * other addresses exist, the most recently created remaining
 * address is automatically set as the new default.
 *
 * @returns {Object} 200 - Address deleted successfully
 * @returns {Object} 404 - Address not found
 * @returns {Object} 500 - Internal server error
 */
export const deleteAddress = async (req, res) => {
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

        const wasDefault = address.isDefault;

        await address.deleteOne();

        // If the deleted address was the default,
        // make another address the default (if one exists).
        if (wasDefault) {
            const nextDefault = await Address.findOne({
                user: req.user._id,
            }).sort({ createdAt: -1 });

            if (nextDefault) {
                nextDefault.isDefault = true;
                await nextDefault.save();
            }
        }

        const addresses = await Address.find({ user: req.user._id })
        return res.status(200).json({
            success: true,
            message: "Address deleted successfully.",
            addresses
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to delete address.",
        });
    }
};

/**
 * @desc    Set an address as the default for the authenticated user
 * @route   PATCH /aire-bliss/user/address/default/:id
 * @access  Private
 *
 * @description
 * Marks the specified address as the user's default address.
 * Any existing default address for the user is first unset,
 * ensuring that only one address is marked as default at a time.
 *
 * @returns {Object} 200 - Default address updated successfully
 * @returns {Object} 404 - Address not found
 * @returns {Object} 500 - Internal server error
 */
export const setDefaultAddress = async (req, res) => {
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

        // Remove default status from all user's addresses
        await Address.updateMany(
            { user: req.user._id },
            { $set: { isDefault: false } }
        );

        // Set selected address as default
        address.isDefault = true;
        await address.save();

        return res.status(200).json({
            success: true,
            message: "Default address updated successfully.",
            address,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to set default address.",
        });
    }
};


/**
 * @desc    Get the default address of the authenticated user
 * @route   GET /aire-bliss/user/address/default
 * @access  Private
 *
 * @description
 * Retrieves the default address associated with the authenticated
 * user. If no default address exists, a 404 response is returned.
 *
 * @returns {Object} 200 - Default address retrieved successfully
 * @returns {Object} 404 - Default address not found
 * @returns {Object} 500 - Internal server error
 */
export const getDefaultAddress = async (req, res) => {
    try {
        const address = await Address.findOne({
            user: req.user._id,
            isDefault: true,
        });

        if (!address) {
            return res.status(404).json({
                success: false,
                message: "Default address not found.",
            });
        }

        return res.status(200).json({
            success: true,
            address,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch default address.",
        });
    }
};