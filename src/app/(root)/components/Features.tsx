import React from 'react'

const Features = () => {
    return (
        <section id="features" className="py-16 px-6 bg-card text-card-foreground text-center">
            <h2 className="text-3xl font-bold mb-8">Why VIRA?</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
                <div>
                    <h3 className="text-lg font-semibold text-primary">Voice Journaling</h3>
                    <p className="text-sm text-muted-foreground">Talk freely. Let AI summarize your emotions.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-primary">Mood Tracker</h3>
                    <p className="text-sm text-muted-foreground">Daily check-ins help you reflect and improve.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-primary">Self-Help Tools</h3>
                    <p className="text-sm text-muted-foreground">Breathing, affirmations, and personalized coping.</p>
                </div>
            </div>
        </section>
    )
}

export default Features