import {
    Download, Calendar, Info, Search, Columns, Maximize2, X, ChevronDown,
    MoreHorizontal, HelpCircle, FileText, Play, Monitor, ArrowRight
} from 'lucide-react';

const AdformPending = ({ onNext }) => {
    return (
        <div style={{ background: '#F2F7FB', minHeight: '100vh', padding: '0', fontFamily: 'Inter, sans-serif' }}>

            {/* Header Section Container */}
            <div style={{ padding: '0 2rem' }}>

                {/* Top Bar / Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', paddingBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', color: '#64748b' }}>
                        <Monitor size={28} color="#0f172a" />
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button style={{ background: 'none', border: 'none', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', cursor: 'pointer' }}>
                            <FileText size={18} /> Help Docs
                        </button>
                    </div>
                </div>

                {/* Action Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem', color: '#64748b' }}>
                        <span style={{ border: '1px solid #f59e0b', color: '#f59e0b', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, backgroundColor: '#fffbeb' }}>Pending</span>
                        <span style={{ color: '#cbd5e1' }}>|</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Feb 1st, 19:40 - Feb 30th, 22:00
                        </span>
                        <span style={{ color: '#cbd5e1' }}>|</span>
                        <span>Goal: <span style={{ color: '#0f172a', fontWeight: '500' }}>Sales</span></span>
                        <span style={{ color: '#cbd5e1' }}>|</span>
                        <span>Optimized: <span style={{ color: '#0f172a', fontWeight: '500' }}>Wallet Connect Event</span></span>
                        <span style={{ color: '#cbd5e1' }}>|</span>
                        <span style={{ color: '#8b5cf6', cursor: 'pointer', fontWeight: '500' }}>Show All</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: '#64748b', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}>
                            <Play size={16} style={{ transform: 'rotate(0deg)' }} /> Resume Campaign
                        </button>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: '#64748b', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}>
                            More Actions <ChevronDown size={16} />
                        </button>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #e2e8f0', marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div style={{ padding: '0.75rem 0', color: '#B045E6', borderBottom: '2px solid #B045E6', fontWeight: 600, cursor: 'pointer', fontSize: '0.95rem' }}>Performance</div>
                        <div style={{ padding: '0.75rem 0', color: '#64748b', cursor: 'pointer', fontWeight: 500, fontSize: '0.95rem' }}>Funnel</div>
                        <div style={{ padding: '0.75rem 0', color: '#64748b', cursor: 'pointer', fontWeight: 500, fontSize: '0.95rem' }}>Revenue</div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', paddingBottom: '0.5rem' }}>
                        <button style={{ background: 'none', border: 'none', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                            <Download size={16} /> Export <ChevronDown size={14} />
                        </button>
                        <button style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '0.4rem 0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
                            <Calendar size={14} /> Last 7 days <ChevronDown size={14} />
                        </button>
                    </div>
                </div>

            </div>

            {/* Main Content Area - Centered Pending Message + Graph */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '3rem',
                gap: '2rem'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: '1.75rem',
                        fontWeight: '500',
                        color: '#0f172a',
                        marginBottom: '0.75rem'
                    }}>
                        Your Campaign Is Pending
                    </h2>
                    <p style={{
                        color: '#64748b',
                        fontSize: '1rem',
                        maxWidth: '400px',
                        lineHeight: '1.6'
                    }}>
                        It will take a few moments for your campaign to be up and running.
                    </p>
                </div>

                {/* Graph Visual from User's PNG */}
                <div style={{ width: '100%', maxWidth: '600px', display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <img 
                        src="/adform_pending_graph.png" 
                        alt="Campaign Graph Preview" 
                        style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'contain' }} 
                    />
                </div>

            </div>

            {/* Simulation Button */}
            <div style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 50
            }}>
                <button
                    onClick={onNext}
                    style={{
                        background: '#0f172a',
                        color: 'white',
                        border: 'none',
                        borderRadius: '24px',
                        padding: '12px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        fontWeight: '500'
                    }}
                >
                    Simulate 24h Wait <ArrowRight size={16} />
                </button>
            </div>

        </div>
    );
};

export default AdformPending;
