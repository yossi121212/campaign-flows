import { Check, Clock, Loader2, Timer, ChevronDown, FileText, Play, Download, Calendar, ExternalLink, Monitor, ArrowRight, X } from 'lucide-react';

const AdformWaiting24h = ({ onNext }) => {
    return (
        <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', background: '#F2F7FB' }}>

            {/* Header Section Container - Unified Padding */}
            <div style={{ padding: '0 2rem' }}>

                {/* Row 1: Top Navigation Bar */}
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
                    <button style={{ background: 'none', border: 'none', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', cursor: 'pointer' }}>
                        <FileText size={18} /> Help Docs
                    </button>
                </div>

                {/* Row 2: Status & Actions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem', color: '#64748b' }}>
                        <span style={{ border: '1px solid #22c55e', padding: '2px 8px', borderRadius: '4px', color: '#22c55e', fontWeight: '600', backgroundColor: '#f0fdf4' }}>Running</span>
                        <span style={{ color: '#cbd5e1' }}>|</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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

                    <div style={{ display: 'flex', gap: '1rem' }}>
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

            {/* Main Content Area - EXACT Twitter Style */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4rem 2rem' }}>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '500', color: '#334155', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Your Campaign Is Running! <span>🎉</span>
                </h3>
                <p style={{ color: '#64748b', fontSize: '1rem', textAlign: 'center', maxWidth: '600px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    We're processing your data - it may take <strong>up to 24 hours</strong> to appear here.<br />
                    In the meantime, you can view your campaign live on Adform.
                </p>

                <a href="https://adform.com" target="_blank" rel="noopener noreferrer" style={{ color: '#B045E6', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none', marginBottom: '3rem', display: 'block' }}>
                    View Campaign on Adform
                </a>

                {/* Campaign Status Card - EXACT Twitter Style */}
                <div style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', width: '100%', maxWidth: '480px', textAlign: 'left', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0f172a', margin: 0 }}>Campaign Status</h4>
                        <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>30.7.24, 11:27</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>

                        {/* Step 1: Created */}
                        <div style={{ display: 'flex', gap: '1.25rem', position: 'relative', paddingBottom: '2rem' }}>
                            <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: 0, width: '2px', background: '#e2e8f0' }}></div>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ width: '24px', height: '24px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Check size={14} color="#16a34a" strokeWidth={3} />
                                </div>
                            </div>
                            <div style={{ paddingTop: '2px' }}>
                                <div style={{ color: '#0f172a', fontWeight: '500', fontSize: '0.95rem' }}>Campaign Created</div>
                                <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.25rem' }}>Setup completed successfully</div>
                            </div>
                        </div>

                        {/* Step 2: Creatives */}
                        <div style={{ display: 'flex', gap: '1.25rem', position: 'relative', paddingBottom: '2rem' }}>
                            <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: 0, width: '2px', background: '#e2e8f0' }}></div>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ width: '24px', height: '24px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Check size={14} color="#16a34a" strokeWidth={3} />
                                </div>
                            </div>
                            <div style={{ paddingTop: '2px' }}>
                                <div style={{ color: '#0f172a', fontWeight: '500', fontSize: '0.95rem' }}>Creatives Added on Adform</div>
                                <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.25rem' }}>Assets synced with ad manager</div>
                            </div>
                        </div>

                        {/* Step 3: Launched */}
                        <div style={{ display: 'flex', gap: '1.25rem', position: 'relative', paddingBottom: '2rem' }}>
                            <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: 0, width: '2px', background: '#e2e8f0' }}></div>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ width: '24px', height: '24px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Check size={14} color="#16a34a" strokeWidth={3} />
                                </div>
                            </div>
                            <div style={{ paddingTop: '2px' }}>
                                <div style={{ color: '#0f172a', fontWeight: '500', fontSize: '0.95rem' }}>Campaign Launched</div>
                                <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.25rem' }}>Active on the network</div>
                            </div>
                        </div>

                        {/* Step 4: Collecting Data */}
                        <div style={{ display: 'flex', gap: '1.25rem', position: 'relative' }}>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ width: '24px', height: '24px', background: '#f3e8ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Loader2 size={14} className="animate-spin" color="#9333ea" />
                                </div>
                            </div>
                            <div style={{ paddingTop: '2px' }}>
                                <div style={{ color: '#0f172a', fontWeight: '500', fontSize: '0.95rem' }}>Collecting Performance Data</div>
                                <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.25rem' }}>Estimated time: up to 24 hours</div>
                            </div>
                        </div>

                    </div>
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
                    Simulate Data Arrival <ArrowRight size={16} />
                </button>
            </div>

            <style>{`
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                .animate-spin {
                    animation: spin 3s linear infinite;
                }
              `}</style>
        </div>
    );
};

export default AdformWaiting24h;
