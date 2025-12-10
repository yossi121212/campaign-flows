import { ChevronRight, ChevronLeft, Info } from 'lucide-react';

const InfoPanel = ({ currentStep, isOpen, toggle, setStep }) => {
    const stepInfo = {
        'internal-start': {
            title: 'Step 1: Campaign Setup',
            desc: 'The user begins in our internal platform. They have defined targeting and goals and are now directed to the external ad network (Twitter/X) to add creative assets.'
        },
        'twitter-launch': {
            title: 'Step 2: External Launch',
            desc: 'The specific creative matching the campaign parameters is synchronized to the Twitter Ads Manager. The user reviews and launches.'
        },
        'twitter-table': {
            title: 'End of Launch Process on Twitter',
            desc: 'The launch process on Twitter is now complete. Based on typical user behavior, we anticipate one of the following flows to occur next:'
        },
        'campaign-page': {
            title: 'Step 4: Waiting State',
            desc: 'If the user returns to the specific campaign page, they see a waiting state while initial data propagates (~24h real time). \n\n❓ Open Question: If we were in Draft status, launched externally, and returned without refreshing - do we see this page immediately or do we need to refresh?'
        },
        'gmail-mock': {
            title: 'Step 5: Notification',
            desc: 'Simulating the asynchronous nature of ad networks. A notification brings the user back when meaningful data is available.'
        },
        'final-dashboard': {
            title: 'Step 5: Analysis',
            desc: 'The loop is closed. The user is back in the platform viewing populated insights.\n\n❓ Open Question: Should we add a temporary banner (that disappears after a set time) indicating that data takes time to stabilize?'
        }
    };

    const info = stepInfo[currentStep] || { title: 'Unknown Step', desc: '' };

    return (
        <>
            {!isOpen && (
                <button
                    onClick={toggle}
                    style={{
                        position: 'fixed',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRight: 'none',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        padding: '1rem 0.5rem',
                        cursor: 'pointer',
                        boxShadow: '-2px 0 5px rgba(0,0,0,0.05)',
                        zIndex: 49
                    }}
                >
                    <ChevronLeft size={20} color="#94a3b8" />
                </button>
            )}
            <div style={{
                width: '300px',
                height: '100vh',
                background: 'white',
                borderLeft: '1px solid #e2e8f0',
                padding: '2rem',
                position: 'fixed',
                right: isOpen ? 0 : '-300px',
                top: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                zIndex: 50,
                transition: 'right 0.3s ease',
                boxShadow: isOpen ? '-5px 0 15px rgba(0,0,0,0.02)' : 'none'
            }}>
                <button
                    onClick={toggle}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#94a3b8'
                    }}
                >
                    <ChevronRight size={20} />
                </button>

                <div style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#8b5cf6',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    marginTop: '2rem'
                }}>
                    Current Flow Context
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0f172a' }}>{info.title}</h2>
                <p style={{ lineHeight: '1.6', color: '#64748b', whiteSpace: 'pre-line', marginBottom: '2rem' }}>{info.desc}</p>

                {currentStep === 'twitter-table' && (
                    <div style={{ marginTop: '2rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#475569', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Predicted Next Steps:
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <button
                                onClick={() => alert('User stays on Twitter (Mock).')}
                                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', color: '#334155', cursor: 'pointer', textAlign: 'left', fontSize: '0.9rem', fontWeight: '500', transition: 'all 0.2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                1. Stay on Twitter
                            </button>
                            <button
                                onClick={() => setStep('campaign-page')}
                                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', color: '#334155', cursor: 'pointer', textAlign: 'left', fontSize: '0.9rem', fontWeight: '500', transition: 'all 0.2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                2. Return to Campaign Page
                            </button>
                            <button
                                onClick={() => { }}
                                style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', color: '#334155', cursor: 'pointer', textAlign: 'left', fontSize: '0.9rem', fontWeight: '500', transition: 'all 0.2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                3. Back to Platform
                            </button>
                        </div>
                    </div>
                )}

                {/* Simulation Controls for Waiting Step */}
                {currentStep === 'campaign-page' && (
                    <div style={{ marginTop: '2rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#475569', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Developer Controls:
                        </p>
                        <button
                            onClick={() => setStep('gmail-mock')}
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                boxShadow: '0 2px 5px rgba(16, 185, 129, 0.3)'
                            }}
                        >
                            Simulate "24 Hours Later"
                            <ChevronRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default InfoPanel;
