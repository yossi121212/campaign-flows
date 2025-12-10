import { Layout, Twitter, Monitor, Clock, Mail, BarChart2, ChevronLeft, ChevronRight } from 'lucide-react';

const XIcon = ({ size = 20, color = "currentColor", ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18.901 3H22.5L14.643 11.985L23.886 24.202H16.645L10.975 16.79L4.485 24.202H0.885L9.273 14.606L0.413 3H7.854L13.001 9.802L18.901 3ZM17.638 22.046H19.632L6.77 5.047H4.631L17.638 22.046Z" fill={color} />
    </svg>
);

const Sidebar = ({ currentStep, setStep, isOpen, toggle }) => {
    const steps = [
        { id: 'internal-start', label: '1. Post Launch Start', icon: Layout },
        { type: 'header', label: '2. X (Process)', icon: XIcon },
        { id: 'twitter-launch', label: 'Add Creative', icon: ChevronRight, indented: true },
        { id: 'twitter-table', label: 'Campaigns Table', icon: Monitor, indented: true },
        { type: 'divider' },
        { id: 'campaign-page', label: '3. Waiting (24h)', icon: Clock },
        { id: 'gmail-mock', label: '4. Email: Data Arrived', icon: Mail },
        { id: 'final-dashboard', label: '5. Final Dashboard', icon: BarChart2 },
    ];

    return (
        <div style={{
            width: isOpen ? '260px' : '60px',
            background: 'white',
            borderRight: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            padding: isOpen ? '2rem 1rem' : '2rem 0.5rem',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 100,
            fontFamily: 'var(--font-family)',
            transition: 'width 0.3s ease',
            overflow: 'hidden'
        }}>
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: isOpen ? 'space-between' : 'center', alignItems: 'center', paddingLeft: isOpen ? '1rem' : 0 }}>
                {isOpen && (
                    <h2 style={{
                        color: '#0f172a',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        whiteSpace: 'nowrap'
                    }}>
                        <div style={{ width: '8px', height: '8px', background: '#B045E6', borderRadius: '50%' }}></div>
                        Scenario
                    </h2>
                )}
                <button onClick={toggle} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                    {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: isOpen ? 'stretch' : 'center' }}>
                {steps.map((s, i) => {
                    if (s.type === 'divider') {
                        return isOpen ? <div key={i} style={{ height: '1px', background: '#f1f5f9', margin: '0.5rem 0' }} /> : null;
                    }
                    if (s.type === 'header') {
                        // Check if children are active to highlight parent in collapsed mode
                        const isChildActive = ['twitter-launch', 'twitter-table'].includes(currentStep);

                        if (!isOpen) {
                            return (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setStep('twitter-launch');
                                        if (!isOpen) toggle(); // Open sidebar when clicked in collapsed state
                                    }}
                                    title={s.label}
                                    style={{
                                        background: isChildActive ? '#f7dcff' : 'transparent',
                                        border: 'none',
                                        borderRadius: '8px',
                                        padding: '0.75rem',
                                        color: isChildActive ? '#B045E6' : '#64748b',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <s.icon size={20} />
                                </button>
                            );
                        }

                        return (
                            <div
                                key={i}
                                onClick={() => setStep('twitter-launch')} // Selects the first sub-item
                                style={{
                                    fontSize: '0.90rem',
                                    fontWeight: '400',
                                    color: '#475569',
                                    marginTop: '1rem',
                                    marginBottom: '0.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0 0.75rem',
                                    cursor: 'pointer'
                                }}>
                                <s.icon size={18} /> {s.label}
                            </div>
                        );
                    }

                    // Hide indented sub-items when sidebar is collapsed (Parent header takes over)
                    if (!isOpen && s.indented) return null;

                    const isActive = currentStep === s.id;
                    return (
                        <button
                            key={s.id}
                            onClick={() => setStep(s.id)}
                            title={!isOpen ? s.label : ''}
                            style={{
                                background: isActive ? '#f7dcff' : 'transparent', // Light version of B045E6
                                border: 'none',
                                borderRadius: '8px',
                                padding: isOpen ? (s.indented ? '0.6rem 0.6rem 0.6rem 3.5rem' : '0.75rem') : '0.75rem', // Increased indentation
                                color: isActive ? '#B045E6' : '#64748b',
                                textAlign: 'left',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: isOpen ? 'flex-start' : 'center',
                                gap: '0.75rem',
                                fontWeight: isActive ? '600' : '500',
                                transition: 'all 0.2s ease',
                                fontSize: s.indented ? '0.9rem' : '0.95rem'
                            }}
                        >
                            {!s.indented && <s.icon size={20} />}
                            {/* No icon for indented items */}
                            {isOpen && <span style={{ whiteSpace: 'nowrap' }}>{s.label}</span>}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
