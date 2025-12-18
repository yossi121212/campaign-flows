import React from 'react';
import { Layout, Twitter, Monitor, Clock, Mail, BarChart2, ChevronLeft, ChevronRight } from 'lucide-react';

const XIcon = ({ size = 20, color = "currentColor", ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18.901 3H22.5L14.643 11.985L23.886 24.202H16.645L10.975 16.79L4.485 24.202H0.885L9.273 14.606L0.413 3H7.854L13.001 9.802L18.901 3ZM17.638 22.046H19.632L6.77 5.047H4.631L17.638 22.046Z" fill={color} />
    </svg>
);

const RedditIcon = ({ size = 20, color = "#FF4500", ...props }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165" />
    </svg>
);

const Sidebar = ({ currentStep, setStep, isOpen, toggle }) => {
    // Determine if we are in the X flow to keep it expanded
    const isXFlow = [
        'internal-start', 'twitter-launch', 'twitter-table',
        'campaign-page', 'gmail-mock', 'final-dashboard'
    ].includes(currentStep);

    // Determine if we are in the Adform flow
    const isAdformFlow = [
        'adform-pending', 'adform-waiting-24h', 'adform-email', 'adform-dashboard'
    ].includes(currentStep);

    // State to toggle the "X" subgroup
    // Default to open if we are currently in an X flow step
    const [isXOpen, setIsXOpen] = React.useState(true);

    // State to toggle the "Adform" subgroup
    const [isAdformOpen, setIsAdformOpen] = React.useState(true);

    // Use effect to ensure it stays open if we navigate to it from outside (future proofing)
    React.useEffect(() => {
        if (isXFlow) setIsXOpen(true);
        if (isAdformFlow) setIsAdformOpen(true);
    }, [currentStep, isXFlow, isAdformFlow]);

    const xSteps = [
        { id: 'internal-start', label: '1. Post Launch Start', icon: Layout },
        { id: 'twitter-launch', label: '2. Add Creative', icon: ChevronRight },
        { id: 'twitter-table', label: '3. Campaigns Table', icon: Monitor },
        { id: 'campaign-page', label: '4. Waiting (24h)', icon: Clock },
        { id: 'gmail-mock', label: '5. Email: Data Arrived', icon: Mail },
        { id: 'final-dashboard', label: '6. Final Dashboard', icon: BarChart2 },
    ];

    const adformSteps = [
        { id: 'adform-pending', label: '1. Campaign Pending', icon: Clock },
        { id: 'adform-waiting-24h', label: '2. Waiting (24h)', icon: Clock },
        { id: 'adform-email', label: '3. Email: Data Arrived', icon: Mail },
        { id: 'adform-dashboard', label: '4. Final Dashboard', icon: BarChart2 },
    ];

    return (
        <div style={{
            width: isOpen ? '280px' : '60px', // Slightly wider for nested content
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
            overflowY: 'auto',
            overflowX: 'hidden'
        }}>
            {/* Header / Toggle */}
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: isOpen ? 'space-between' : 'center', alignItems: 'center', paddingLeft: isOpen ? '0.5rem' : 0 }}>
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

                {/* Level 1: Post campaign launch flow */}
                {isOpen && (
                    <div style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: '#94a3b8',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        marginBottom: '0.5rem',
                        paddingLeft: '0.5rem'
                    }}>
                        Post campaign launch flow
                    </div>
                )}

                {/* Level 2: X (Container for flow steps) */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <button
                        onClick={() => {
                            if (!isOpen) {
                                toggle();
                                setIsXOpen(true);
                                // Navigate to first X step when clicking while collapsed
                                if (!isXFlow) {
                                    setStep('internal-start');
                                }
                            } else {
                                setIsXOpen(!isXOpen);
                            }
                        }}
                        title="X (Twitter)"
                        style={{
                            background: isXFlow ? '#fdf4ff' : 'transparent',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '0.75rem',
                            color: isXFlow ? '#B045E6' : '#475569',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: isOpen ? 'space-between' : 'center',
                            gap: '0.75rem',
                            fontWeight: '600',
                            transition: 'all 0.2s ease',
                            fontSize: '0.95rem'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <XIcon size={20} />
                            {isOpen && <span>X</span>}
                        </div>
                        {isOpen && (
                            <div style={{ transform: isXOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                                <ChevronRight size={16} />
                            </div>
                        )}
                    </button>

                    {/* Level 3: X Flow Steps */}
                    {isXOpen && (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.25rem',
                            marginTop: '0.25rem',
                            paddingLeft: isOpen ? '0' : '0'
                        }}>
                            {xSteps.map((s) => {
                                const isActive = currentStep === s.id;
                                if (!isOpen && !isActive) return null; // In collapsed mode, maybe show only active or hover? simplified for now.

                                return (
                                    <button
                                        key={s.id}
                                        onClick={() => setStep(s.id)}
                                        title={!isOpen ? s.label : ''}
                                        style={{
                                            background: isActive ? '#f7dcff' : 'transparent',
                                            border: 'none',
                                            borderRadius: '8px',
                                            // Deep indentation for Level 3
                                            padding: isOpen ? '0.6rem 0.6rem 0.6rem 3rem' : '0.75rem',
                                            color: isActive ? '#B045E6' : '#64748b',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: isOpen ? 'flex-start' : 'center',
                                            gap: '0.75rem',
                                            fontWeight: isActive ? '600' : '500',
                                            transition: 'all 0.2s ease',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        {!isOpen ? <s.icon size={20} /> : <span>{s.label}</span>}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Level 2: Adform (Active Flow) */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <button
                        onClick={() => {
                            if (!isOpen) {
                                toggle();
                                setIsAdformOpen(true);
                                // Navigate to first Adform step when clicking while collapsed
                                if (!isAdformFlow) {
                                    setStep('adform-pending');
                                }
                            } else {
                                setIsAdformOpen(!isAdformOpen);
                            }
                        }}
                        title="Adform"
                        style={{
                            background: isAdformFlow ? '#fdf4ff' : 'transparent',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '0.75rem',
                            color: isAdformFlow ? '#B045E6' : '#475569',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: isOpen ? 'space-between' : 'center',
                            gap: '0.75rem',
                            fontWeight: '500',
                            fontSize: '0.95rem'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Monitor size={20} />
                            {isOpen && <span>Adform</span>}
                        </div>
                        {isOpen && (
                            <div style={{ transform: isAdformOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                                <ChevronRight size={16} />
                            </div>
                        )}
                    </button>

                    {/* Level 3: Adform Flow Steps */}
                    {isAdformOpen && (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.25rem',
                            marginTop: '0.25rem',
                            paddingLeft: isOpen ? '0' : '0'
                        }}>
                            {adformSteps.map((s) => {
                                const isActive = currentStep === s.id;
                                if (!isOpen && !isActive) return null;

                                return (
                                    <button
                                        key={s.id}
                                        onClick={() => setStep(s.id)}
                                        title={!isOpen ? s.label : ''}
                                        style={{
                                            background: isActive ? '#f7dcff' : 'transparent',
                                            border: 'none',
                                            borderRadius: '8px',
                                            padding: isOpen ? '0.6rem 0.6rem 0.6rem 3rem' : '0.75rem',
                                            color: isActive ? '#B045E6' : '#64748b',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: isOpen ? 'flex-start' : 'center',
                                            gap: '0.75rem',
                                            fontWeight: isActive ? '600' : '500',
                                            transition: 'all 0.2s ease',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        {!isOpen ? <s.icon size={20} /> : <span>{s.label}</span>}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
