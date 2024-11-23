const getUniquePlans = (plans) => {
    const uniquePlansMap = new Map();
    plans.map((plan) => {
        if (!uniquePlansMap.has(plan.name)) {
            uniquePlansMap.set(plan.name, plan);
        }
    });
    return Array.from(uniquePlansMap.values());
};
const getDuplicatePlans = (plans) => {
    const planCountMap = new Map();
    const duplicates = [];
    plans.map(plan => {
        if (planCountMap.has(plan.name)) {
            planCountMap.set(plan.name, planCountMap.get(plan.name) + 1);
        } else {
            planCountMap.set(plan.name, 1);
        }
    });
    plans.map(plan => {
        if (planCountMap.get(plan.name) > 1) {
            duplicates.push(plan);
        }
    });

    return duplicates;
};
export { getUniquePlans, getDuplicatePlans }