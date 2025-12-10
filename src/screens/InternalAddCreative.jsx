import { ArrowRight, Image as ImageIcon, Play, HelpCircle, ChevronDown, Download, Calendar, FileText, CheckCircle2 } from 'lucide-react';

const XIcon = ({ size = 20, color = "currentColor", ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18.901 3H22.5L14.643 11.985L23.886 24.202H16.645L10.975 16.79L4.485 24.202H0.885L9.273 14.606L0.413 3H7.854L13.001 9.802L18.901 3ZM17.638 22.046H19.632L6.77 5.047H4.631L17.638 22.046Z" fill={color} />
    </svg>
);

const InternalAddCreative = ({ onNext }) => {
    return (
        <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', background: '#F2F7FB' }}>

            {/* Header Section Container */}
            <div style={{ padding: '0 2rem' }}>

                {/* Row 1: Top Navigation Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', paddingBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', color: '#64748b' }}>
                        <XIcon size={28} color="#0f172a" />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '-0.02em' }}>
                            <span style={{ color: '#0f172a', fontWeight: '400' }}>North America</span>
                            <span style={{ color: '#94a3b8', fontWeight: '300' }}>|</span>
                            <span style={{ color: '#64748b' }}>Web</span>
                            <span style={{ color: '#94a3b8', fontWeight: '300' }}>|</span>
                            <span style={{ color: '#64748b' }}>USDC + Similar</span>
                            <span style={{ color: '#94a3b8', fontWeight: '300' }}>|</span>
                            <ChevronDown size={20} color="#94a3b8" style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    <button style={{ background: 'none', border: 'none', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', cursor: 'pointer' }}>
                        <FileText size={18} /> Help Docs
                    </button>
                </div>

                {/* Row 2: Status & Actions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem', color: '#64748b' }}>
                        <span style={{ border: '1px solid #cbd5e1', padding: '2px 8px', borderRadius: '4px', color: '#475569', fontWeight: '500' }}>Draft</span>
                        <span style={{ color: '#cbd5e1' }}>|</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b' }}>
                            <Calendar size={14} /> Feb 1st, 19:40 - Feb 30th, 22:00
                        </span>
                        <span style={{ color: '#cbd5e1' }}>|</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Goal: <span style={{ color: '#0f172a', fontWeight: '500' }}>Sales</span>
                        </span>
                        <span style={{ color: '#cbd5e1' }}>|</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Optimized: <span style={{ color: '#0f172a', fontWeight: '500' }}>Wallet Connect Event</span>
                        </span>
                        <span style={{ color: '#cbd5e1' }}>|</span>
                        <span style={{ color: '#B045E6', fontWeight: '500', cursor: 'pointer' }}>Show All</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontWeight: '500', cursor: 'pointer' }}>
                            <Play size={16} style={{ transform: 'rotate(0deg)' }} /> Resume Campaign
                        </button>
                        <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontWeight: '500', cursor: 'pointer' }}>
                            More Actions <ChevronDown size={14} />
                        </button>
                    </div>
                </div>

                {/* Row 3: Tabs & Exports */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #e2e8f0', marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div style={{ padding: '0.75rem 0', color: '#B045E6', borderBottom: '2px solid #B045E6', fontWeight: '600', cursor: 'pointer', fontSize: '0.95rem' }}>Performance</div>
                        <div style={{ padding: '0.75rem 0', color: '#64748b', fontWeight: '500', cursor: 'pointer', fontSize: '0.95rem' }}>Funnel</div>
                        <div style={{ padding: '0.75rem 0', color: '#64748b', fontWeight: '500', cursor: 'pointer', fontSize: '0.95rem' }}>Revenue</div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', paddingBottom: '0.5rem' }}>
                        <button style={{ background: 'none', border: 'none', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                            <Download size={16} /> Export <ChevronDown size={14} />
                        </button>
                        <button style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.4rem 0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                            <Calendar size={14} /> All Time <ChevronDown size={14} />
                        </button>
                    </div>
                </div>

            </div>

            {/* Main Panel */}
            <div style={{ flex: 1, padding: '0', display: 'flex', flexDirection: 'column' }}>


                {/* Empty State Content */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '6rem' }}>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: '400', color: '#334155', marginBottom: '1rem' }}>Almost Ready!</h3>
                    <p style={{ color: '#64748b', fontSize: '1rem', margin: 0, lineHeight: '1.5' }}>Your campaign is one step away.</p>
                    <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0', marginBottom: '2rem' }}>Add your creative on X to launch.</p>

                    <button
                        onClick={onNext}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#B045E6',
                            fontWeight: '600',
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            marginBottom: '4rem'
                        }}
                    >
                        Add Creative on X (Twitter)
                    </button>

                    {/* Visualization */}
                    <div style={{ position: 'relative', width: '300px', height: '100px' }}>

                        {/* Curved Arrow */}
                        <svg width="200" height="80" viewBox="0 0 200 80" style={{ position: 'absolute', top: -40, left: 60, zIndex: 0, overflow: 'visible' }}>
                            <path d="M 0 60 Q 90 -20 180 20" stroke="#cbd5e1" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" />
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#cbd5e1" />
                                </marker>
                            </defs>
                        </svg>

                        {/* Left: X Ads Button */}
                        <div style={{
                            position: 'absolute',
                            left: 0,
                            top: 10,
                            background: '#0f172a',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            zIndex: 10
                        }}>
                            <XIcon size={16} color="white" /> Ads
                        </div>

                        {/* Right: Creative Cards */}
                        <div style={{ position: 'absolute', right: 0, top: 0 }}>
                            {/* Back Card */}
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'white',
                                borderRadius: '12px',
                                border: '1px solid #e2e8f0',
                                transform: 'rotate(-10deg)',
                                position: 'absolute',
                                left: -25,
                                top: 5,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}>
                                <Play size={18} color="#94a3b8" fill="#94a3b8" strokeWidth={0} />
                            </div>

                            {/* Front Card */}
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'white',
                                borderRadius: '12px',
                                border: '1px solid #e2e8f0',
                                transform: 'rotate(5deg)',
                                position: 'relative',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                zIndex: 5
                            }}>
                                <ImageIcon size={18} color="#94a3b8" />
                            </div>

                            {/* Sparkles */}
                            <div style={{ position: 'absolute', top: -15, right: -10, color: '#cbd5e1', fontSize: '10px' }}>✦</div>
                            <div style={{ position: 'absolute', bottom: 0, left: -40, color: '#cbd5e1', fontSize: '12px' }}>✦</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternalAddCreative;
