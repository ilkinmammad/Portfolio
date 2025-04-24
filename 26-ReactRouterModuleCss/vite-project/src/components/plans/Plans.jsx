import React from 'react'
import Plan from '../plan/Plan'

const Plans = () => {
    const plans = [
        {
            id: 1,
            title: "Free",
            price: "$0",
            users: "1 user",
            features: ["5GB storage", "Unlimited public projects", "Community access"],
            disabled: ["Unlimited private projects", "Dedicated support", "Free linked domain", "Monthly status reports"],
        },
        {
            id: 2,
            title: "Pro",
            price: "$15",
            users: "5 users",
            features: ["50GB storage", "Unlimited public & private projects", "Priority support"],
            disabled: ["Free linked domain", "Monthly status reports"],
        },
        {
            id: 3,
            title: "Enterprise",
            price: "$29",
            users: "Unlimited users",
            features: ["1TB storage", "All project types", "Dedicated support", "Free domain", "Monthly reports"],
            disabled: [],
        },
    ]
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0', gap: '40px' }}>
            {plans.map((plan) => (
                <Plan
                    key={plan.id}
                    title={plan.title}
                    price={plan.price}
                    users={plan.users}
                    features={plan.features}
                    disabled={plan.disabled}

                />
            ))}
        </div>
    )
}

export default Plans