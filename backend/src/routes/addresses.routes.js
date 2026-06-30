import { Router } from 'express'
import { authenticateToken } from '../middlewares/auth.middleware.js';
import { addAddress, deleteAddress, getDefaultAddress, getSingleAddress, getUserAddresses, setDefaultAddress, updateAddress } from '../controllers/address.controller.js';

const addressesRouter = Router();

/**
 * @name    getUserAddresses
 * @desc    Get all addresses of the authenticated user
 * @route   GET /aire-bliss/user/address/
 * @access  private
 */
addressesRouter.get('/', authenticateToken, getUserAddresses);


/**
 * @name    addAddress
 * @route   POST /aire-bliss/user/address/
 * @desc    Add a new address for the authenticated user
 * @access  private
 */

addressesRouter.post("/", authenticateToken, addAddress);

/**
 * @name    getSingleAddress
 * @route   GET /aire-bliss/user/address/:id
 * @desc    Get a single address of the authenticated user
 * @access  private
 */
addressesRouter.get('/:id', authenticateToken, getSingleAddress);


/**
 * @name    updateAddress
 * @route   PUT /aire-bliss/user/address/:id
 * @desc    Update an existing address of the authenticated user
 * @access  private
 */

addressesRouter.put('/:id', authenticateToken, updateAddress);


/**
 * @name    deleteAddress
 * @route   DELETE /aire-bliss/user/address/:id
 * @desc    Delete an address of the authenticated user
 * @access  private
 */

addressesRouter.delete("/:id", authenticateToken, deleteAddress);


/**
 * @name    setDefaultAddress
 * @route   PATCH /aire-bliss/user/address/default/:id
 * @desc    Set an address as the default for the authenticated user
 * @access  private
 */
addressesRouter.patch("/default/:id", authenticateToken, setDefaultAddress);

/**
 * @name    getDefaultAddress
 * @route   GET /aire-bliss/user/address/default
 * @desc    Get the default address of the authenticated user
 * @access  private
 */

addressesRouter.get("/default", authenticateToken, getDefaultAddress)



export default addressesRouter;