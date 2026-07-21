import { Router } from "express";
import { getFeaturedRestaurents, getRestaurentAvailability, getRestaurentBySlug, getRestaurents } from "../controllers/restaurantController.js";

const restaurantRouter = Router();

restaurantRouter.get('/', getRestaurents);
restaurantRouter.get('/featured', getFeaturedRestaurents);
restaurantRouter.get('/:slug', getRestaurentBySlug);
restaurantRouter.get('/:id/availability', getRestaurentAvailability);



export default restaurantRouter;