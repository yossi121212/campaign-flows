import React from 'react';
import { MousePointer, ChevronDown, ChevronRight, HelpCircle, Copy, Trash2, Upload, MessageSquare, Heart, RefreshCw, Share, Image } from 'lucide-react';

const TwitterLaunch = ({ onLaunch }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>

            {/* Top Navigation Bar (Black) */}
            <div style={{ height: '56px', background: '#000', display: 'flex', alignItems: 'center', padding: '0 2rem', color: '#fff', justifyContent: 'space-between', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>𝕏 <span style={{ marginLeft: '8px' }}>Ads</span></div>
                    <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
                        <span style={{ cursor: 'pointer' }}>Campaigns <ChevronDown size={14} style={{ display: 'inline' }} /></span>
                        <span style={{ cursor: 'pointer' }}>Creatives <ChevronDown size={14} style={{ display: 'inline' }} /></span>
                        <span style={{ cursor: 'pointer' }}>Tools <ChevronDown size={14} style={{ display: 'inline' }} /></span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem' }}>
                    <span>Help?</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Addressablelabs <ChevronDown size={14} />
                    </div>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(45deg, #A958FE, #DA5C58)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
                </div>
            </div>

            {/* Main Layout: Sidebar vs Content */}
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

                {/* Left Sidebar Steps */}
                <div style={{ width: '240px', borderRight: '1px solid #e2e8f0', padding: '1.5rem 0', flexShrink: 0 }}>
                    <div style={{ padding: '0.5rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', letterSpacing: '0.5px' }}>CAMPAIGN</div>
                    <div style={{ padding: '0.75rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem', fontWeight: '500' }}>
                        Untitled <ChevronRight size={16} />
                    </div>

                    <div style={{ padding: '0.5rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', letterSpacing: '0.5px', marginTop: '1.5rem' }}>AD GROUPS</div>
                    <div style={{ padding: '0.75rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem', fontWeight: '500' }}>
                        Untitled <ChevronDown size={16} />
                    </div>
                    <div style={{ padding: '0.5rem 1.5rem 0.5rem 2.5rem', fontSize: '0.9rem', color: '#64748b' }}>Ad group details</div>
                    <div style={{ padding: '0.5rem 1.5rem 0.5rem 2.5rem', fontSize: '0.9rem', fontWeight: 'bold', borderLeft: '4px solid #1d9bf0', background: '#f0f9ff' }}>Ad 1</div>

                    <div style={{ padding: '0.5rem 1.5rem', fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', letterSpacing: '0.5px', marginTop: '1.5rem' }}>REVIEW</div>
                    <div style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem', fontWeight: '500' }}>Review and launch campaign</div>
                </div>

                {/* Center Content: Ad Details Form */}
                <div style={{ flex: 1, padding: '2rem', overflowY: 'auto', background: '#fff' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Ad 1</h1>
                        <div style={{ display: 'flex', gap: '1rem', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}>+ Create another ad</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}><Copy size={14} /> Copy ad</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer' }}><Trash2 size={14} /> Delete</span>
                        </div>
                    </div>

                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Ad details</h3>
                            <span style={{ fontSize: '0.9rem', fontWeight: '600', textDecoration: 'underline', cursor: 'pointer' }}>Import existing ad</span>
                        </div>

                        {/* Form Fields */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Ad name (optional)</label>
                            <input type="text" defaultValue="Ad 1" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
                            <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.2rem' }}>116</div>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.5rem' }}>Destination</label>
                            <div style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                None <ChevronDown size={16} />
                            </div>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <div style={{ width: '20px', height: '20px', background: 'linear-gradient(45deg, #A958FE, #DA5C58)', borderRadius: '50%' }}></div>
                                <span style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>Addressablelabs</span>
                                <span style={{ color: '#1d9bf0' }}>✔</span>
                                <span style={{ color: '#64748b', fontSize: '0.9rem' }}>@addressablelabs</span>
                            </div>
                            <textarea
                                rows={4}
                                defaultValue="Just launched our new campaign! 🚀 #Crypto #Web3"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '2px solid #1d9bf0', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }}
                            />
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', fontSize: '0.9rem', color: '#64748b' }}>
                                <RefreshCw size={14} /> Only people you mention can reply
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ flex: 1, border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '20px', height: '20px', border: '2px solid #cbd5e1', borderRadius: '50%' }}></div>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>Single media</div>
                                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>1 photo or video</div>
                                </div>
                            </div>
                            <div style={{ flex: 1, border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '20px', height: '20px', border: '2px solid #cbd5e1', borderRadius: '50%' }}></div>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>Multi-Media</div>
                                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>2-4 photos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar: Preview */}
                <div style={{ width: '350px', background: '#f8fafc', padding: '2rem', borderLeft: '1px solid #e2e8f0', overflowY: 'auto' }}>
                    <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                        <div style={{ height: '40px', width: '40px', background: '#e2e8f0', borderRadius: '50%', marginBottom: '1rem' }}></div>
                        <div style={{ height: '10px', width: '80%', background: '#e2e8f0', borderRadius: '4px', marginBottom: '0.5rem' }}></div>
                        <div style={{ height: '10px', width: '60%', background: '#e2e8f0', borderRadius: '4px' }}></div>
                    </div>

                    <div style={{ border: '1px solid #e2e8f0', background: '#fff', borderRadius: '12px', padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem' }}>
                            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(45deg, #A958FE, #DA5C58)', borderRadius: '50%', flexShrink: 0 }}></div>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '2px' }}>Addressable... <span style={{ color: '#1d9bf0', fontSize: '0.8rem' }}>✔</span></div>
                                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>@addressablelabs</div>
                            </div>
                        </div>
                        <div style={{ fontSize: '0.95rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                            Just launched our new campaign! 🚀 #Crypto #Web3
                        </div>
                        <div style={{ height: '180px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', marginBottom: '1rem' }}>
                            <Image size={32} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', padding: '0 0.5rem' }}>
                            <MessageSquare size={18} />
                            <RefreshCw size={18} />
                            <Heart size={18} />
                            <Share size={18} />
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', opacity: 0.5 }}>
                        <div style={{ height: '10px', width: '100%', background: '#e2e8f0', borderRadius: '4px', marginBottom: '0.5rem' }}></div>
                        <div style={{ height: '10px', width: '90%', background: '#e2e8f0', borderRadius: '4px', marginBottom: '0.5rem' }}></div>
                    </div>
                </div>

            </div>

            {/* Footer Actions */}
            <div style={{ height: '70px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', flexShrink: 0 }}>
                <button className="btn-secondary" style={{ padding: '0.5rem 1.5rem', fontWeight: 'bold' }}>Back</button>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-secondary" style={{ padding: '0.5rem 1.5rem', fontWeight: 'bold' }}>Save draft</button>
                    <button
                        onClick={onLaunch}
                        style={{ background: '#000', color: '#fff', border: 'none', padding: '0.6rem 2rem', borderRadius: '999px', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer' }}
                    >
                        Next
                    </button>
                </div>
            </div>

        </div>
    );
};

export default TwitterLaunch;
