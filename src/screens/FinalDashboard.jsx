import {
    Download, Calendar, Info, Search, Columns, Maximize2, X, ChevronDown,
    MoreHorizontal, HelpCircle, FileText, Play, Sparkles
} from 'lucide-react';

const XIcon = ({ size = 20, color = "currentColor", ...props }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18.901 3H22.5L14.643 11.985L23.886 24.202H16.645L10.975 16.79L4.485 24.202H0.885L9.273 14.606L0.413 3H7.854L13.001 9.802L18.901 3ZM17.638 22.046H19.632L6.77 5.047H4.631L17.638 22.046Z" fill={color} />
    </svg>
);

const MetricCard = ({ label, value, subValue, subLabel, badge }) => (
    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }}></span>
            {label}
            <Info size={14} color="#94a3b8" />
            {badge && <span style={{ background: '#fce7f3', color: '#db2777', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: '600' }}>{badge}</span>}
        </div>
        <div style={{ fontSize: '1.8rem', fontWeight: '600', color: '#0f172a', marginBottom: '0.25rem' }}>{value}</div>
        {subValue && (
            <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                {subValue} <span style={{ color: '#94a3b8' }}>{subLabel}</span>
            </div>
        )}
    </div>
);

const FinalDashboard = ({ onRestart }) => {
    return (
        <div style={{ background: '#F2F7FB', minHeight: '100vh', padding: '0', fontFamily: 'Inter, sans-serif' }}>

            {/* Header Section Container */}
            <div style={{ padding: '0 2rem' }}>

                {/* Top Bar / Header */}
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button style={{ background: 'none', border: 'none', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500', cursor: 'pointer' }}>
                            <FileText size={18} /> Help Docs
                        </button>
                    </div>
                </div>

                {/* Action Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem', color: '#64748b' }}>
                        <span style={{ border: '1px solid #22c55e', color: '#22c55e', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, backgroundColor: '#f0fdf4' }}>Running</span>
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
                        <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '0.9rem' }}> <Download size={16} /> Export <ChevronDown size={14} /></button>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white', border: '1px solid #e2e8f0', padding: '0.4rem 0.8rem', borderRadius: '6px', color: '#64748b', cursor: 'pointer', fontSize: '0.9rem' }}> <Calendar size={14} /> Last 7 days <ChevronDown size={14} /></button>
                    </div>
                </div>

            </div>

            {/* Main Content Area (With Padding) */}
            <div style={{ padding: '0 2rem' }}>

                {/* Info Alert */}
                <div style={{
                    background: 'linear-gradient(to right, #eff6ff, #fdf4ff)',
                    border: '1px solid #e9d5ff',
                    borderRadius: '8px',
                    padding: '1rem',
                    marginBottom: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start'
                }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{
                            marginTop: '2px',
                            background: 'linear-gradient(135deg, #B045E6, #f43f5e)',
                            borderRadius: '50%',
                            width: '32px',
                            height: '32px',
                            padding: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            flexShrink: 0 // Prevent squashing
                        }}>
                            <Sparkles size={16} fill="white" />
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, color: '#1f2937', fontSize: '1rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Emma Addressable: Welcome to your campaign!
                                <span style={{
                                    background: 'linear-gradient(135deg, #B045E6, #f43f5e)',
                                    color: 'white',
                                    padding: '2px 8px',
                                    borderRadius: '12px',
                                    fontSize: '0.7rem',
                                    fontWeight: '600'
                                }}>New</span>
                            </div>
                            <div style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.5' }}>
                                I'm gathering initial performance data for you. It's still warming up, so you might see some small fluctuations as the ad platforms optimize delivery! ✨
                            </div>
                        </div>
                    </div>
                    <X size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
                </div>

                {/* Metrics Section */}
                <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1rem', color: '#64748b', fontWeight: 500, margin: 0 }}>Performance Over Time <Info size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /></h3>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}><Columns size={16} /> Metrics</div>
                            <Maximize2 size={16} color="#64748b" />
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                        <MetricCard label="Impressions" value="1M" />
                        <MetricCard label="Spend" value="$2.5K / $20K" />
                        <MetricCard label="Wallet Connect Events" value="$1M" badge="Optimized" />
                        <MetricCard label="Cost Per Wallet Connect Event" value="$2.38" />
                    </div>

                    {/* SVG Graph Placeholder */}
                    <div style={{ height: '300px', width: '100%', position: 'relative' }}>
                        <svg viewBox="0 0 1000 300" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                            {/* Grid Lines */}
                            <line x1="0" y1="0" x2="1000" y2="0" stroke="#f1f5f9" strokeWidth="1" />
                            <line x1="0" y1="75" x2="1000" y2="75" stroke="#f1f5f9" strokeWidth="1" />
                            <line x1="0" y1="150" x2="1000" y2="150" stroke="#f1f5f9" strokeWidth="1" />
                            <line x1="0" y1="225" x2="1000" y2="225" stroke="#f1f5f9" strokeWidth="1" />
                            <line x1="0" y1="300" x2="1000" y2="300" stroke="#e2e8f0" strokeWidth="1" />

                            {/* Y Axis Labels (Mock) */}
                            <text x="-30" y="300" fill="#94a3b8" fontSize="10">0</text>
                            <text x="-30" y="225" fill="#94a3b8" fontSize="10">1K</text>
                            <text x="-30" y="150" fill="#94a3b8" fontSize="10">2K</text>
                            <text x="-30" y="75" fill="#94a3b8" fontSize="10">5K</text>
                            <text x="-30" y="0" fill="#94a3b8" fontSize="10">10K</text>

                            {/* X Axis Labels */}
                            <text x="50" y="320" fill="#94a3b8" fontSize="10">1.1</text>
                            <text x="250" y="320" fill="#94a3b8" fontSize="10">2.1</text>
                            <text x="450" y="320" fill="#94a3b8" fontSize="10">3.1</text>
                            <text x="650" y="320" fill="#94a3b8" fontSize="10">4.1</text>
                            <text x="850" y="320" fill="#94a3b8" fontSize="10">5.1</text>

                            {/* Data Lines */}
                            <polyline points="0,280 200,260 400,100 600,120 800,130 1000,250" fill="none" stroke="#3b82f6" strokeWidth="2" /> {/* Blue */}
                            <polyline points="0,300 200,240 400,140 600,200 800,140 1000,200" fill="none" stroke="#f59e0b" strokeWidth="2" /> {/* Orange */}
                            <polyline points="0,290 200,280 400,180 600,180 800,180 1000,260" fill="none" stroke="#86efac" strokeWidth="2" /> {/* Green */}
                            <polyline points="0,300 150,280 350,240 550,230 750,270 950,250" fill="none" stroke="#f472b6" strokeWidth="2" /> {/* Pink */}

                        </svg>
                    </div>
                </div>

                {/* Breakdown Table */}
                <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '0', overflow: 'hidden' }}>
                    <div style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1rem', color: '#1e293b', fontWeight: 600, margin: 0 }}>Performance Breakdown <Info size={14} style={{ display: 'inline', verticalAlign: 'middle', color: '#94a3b8' }} /></h3>
                            <div style={{ border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4px 8px', fontSize: '0.85rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Creatives <ChevronDown size={14} /></div>
                            <div style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Metrics: Absolute <ChevronDown size={14} /></div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ border: '1px solid #e2e8f0', borderRadius: '4px', padding: '4px 8px', fontSize: '0.85rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem', width: '200px' }}> <Search size={14} /> Search table</div>
                            <button style={{ border: 'none', background: 'none', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem' }}><Columns size={16} /> Columns</button>
                            <button style={{ border: 'none', background: 'none', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}><Maximize2 size={16} /></button>
                        </div>
                    </div>

                    <div style={{ background: '#f8fafc', padding: '0.75rem 1rem', fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Info size={14} /> The sum of the breakdown results may exceed the total events shown in the chart as users can generate events in multiple categories
                        <span style={{ marginLeft: 'auto', cursor: 'pointer' }}>Dismiss</span>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead style={{ background: 'white', color: '#64748b', textAlign: 'left' }}>
                            <tr>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 500 }}>Ad Name</th>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 500 }}>URL</th>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 500 }}>Clicks</th>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 500 }}>CPC</th>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 500 }}>CTR</th>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 500 }}>CPE</th>
                                <th style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', fontWeight: 500 }}>Wallet Connect Events</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 1].map((n, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '1rem', color: '#334155' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            Creative {n}
                                            <span style={{ fontSize: '0.7rem', color: '#8b5cf6', background: '#f3e8ff', padding: '2px 6px', borderRadius: '4px' }}>Preview Ad</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem', color: '#334155' }}>https://addressable.io?utm_source=x_twitter-...</td>
                                    <td style={{ padding: '1rem', color: '#334155' }}>{i === 1 ? '12K' : '16K'}</td>
                                    <td style={{ padding: '1rem', color: '#334155' }}>{i === 1 ? '33' : '99'}</td>
                                    <td style={{ padding: '1rem', color: '#334155' }}>{i === 1 ? '0.5%' : '0.11%'}</td>
                                    <td style={{ padding: '1rem', color: '#334155' }}>{i === 1 ? '0.5%' : '0.11%'}</td>
                                    <td style={{ padding: '1rem', color: '#334155' }}>{i === 1 ? '56' : '24'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FinalDashboard;
