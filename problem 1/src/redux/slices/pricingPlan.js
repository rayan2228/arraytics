import { createSlice } from "@reduxjs/toolkit";
import data from '../../server/data.json'
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

    },
});
export default pricingPlanSlice.reducer;