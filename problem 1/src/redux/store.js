
import { configureStore } from '@reduxjs/toolkit';
import pricingPlanSlice from './slices/pricingPlan';
export const store = configureStore({
    reducer: {
        pricingPlan: pricingPlanSlice
    }
})