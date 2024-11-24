import { createSlice } from "@reduxjs/toolkit";
import data from '../../data/data.json'
const initialState = {
    billingType: '1_year',
    plansData: {
        plans: data.plans,
        plansInfo: data.plansInfo,
        features: data.features,
    },
}
export const pricingPlanSlice = createSlice({
    name: "pricingPlan",
    initialState,
    reducers: {
        setBillingType: (state, { payload }) => {
            state.billingType = payload;
        },
    },
});

export const { setBillingType } = pricingPlanSlice.actions;
export default pricingPlanSlice.reducer;