import { useState } from 'react';
import {
    Menu, Search, Settings, HelpCircle, Grid,
    Plus, Inbox, Star, Clock, Send, File,
    ChevronLeft, MoreVertical, Printer, ExternalLink,
    Square, CheckSquare, RotateCw, ArrowLeft, Sparkles
} from 'lucide-react';

const GmailMock = ({ onOpenLink }) => {
    const [view, setView] = useState('list'); // 'list' or 'detail'

    // Mock Data
    const emails = [
        { id: 1, sender: 'Emma AI', subject: 'Message from Emma Addressable: Campaign Update', snippet: 'Hi Yossi! I have some exciting updates about your campaign...', time: '10:42 AM', read: false },
        { id: 2, sender: 'Twitter Ads Team', subject: 'Your campaign has been approved', snippet: 'Congrats! Your ads are now running on X...', time: 'Yesterday', read: true },
        { id: 3, sender: 'Google Workspace', subject: 'Security alert', snippet: 'New sign-in detected on your account...', time: 'Dec 4', read: true },
    ];

    return (
        <div style={{ background: '#f6f8fc', height: '100%', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto, Arial, sans-serif' }}>

            {/* 1. Header */}
            <div style={{ height: '64px', background: '#f6f8fc', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '238px' }}>
                    <button style={{ border: 'none', background: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer', color: '#5f6368' }}><Menu size={24} /></button>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}>
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="Gmail" style={{ height: '22px' }} />
                    </div>
                </div>

                {/* Search */}
                <div style={{ flex: 1, maxWidth: '720px', background: '#eaf1fb', borderRadius: '24px', height: '48px', display: 'flex', alignItems: 'center', padding: '0 1rem', transition: 'background 0.2s, box-shadow 0.2s' }}>
                    <button style={{ border: 'none', background: 'none', padding: '8px', cursor: 'pointer', color: '#444746' }}><Search size={22} /></button>
                    <input
                        placeholder="Search mail"
                        style={{ flex: 1, background: 'transparent', border: 'none', fontSize: '1rem', outline: 'none', color: '#1f1f1f', marginLeft: '0.5rem' }}
                    />
                    <button style={{ border: 'none', background: 'none', padding: '8px', cursor: 'pointer', color: '#444746' }}><Settings size={22} /></button>
                </div>

                {/* Right Icons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingRight: '1rem' }}>
                    <button style={{ border: 'none', background: 'none', padding: '8px', cursor: 'pointer', color: '#5f6368' }}><HelpCircle size={22} /></button>
                    <button style={{ border: 'none', background: 'none', padding: '8px', cursor: 'pointer', color: '#5f6368' }}><Settings size={22} /></button>
                    <button style={{ border: 'none', background: 'none', padding: '8px', cursor: 'pointer', color: '#5f6368' }}><Grid size={22} /></button>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#7e57c2', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', cursor: 'pointer', marginLeft: '8px' }}>Y</div>
                </div>
            </div>

            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

                {/* 2. Sidebar */}
                <div style={{ width: '256px', paddingRight: '16px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '0 0 16px 8px' }}>
                        <button style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#c2e7ff', border: 'none', padding: '16px 24px 16px 16px', borderRadius: '16px', cursor: 'pointer', transition: 'box-shadow .08s linear,min-width .15s cubic-bezier(0.4,0.0,0.2,1)' }}>
                            <Plus size={24} color="#001d35" />
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#001d35' }}>Compose</span>
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '12px' }}>
                        <Item icon={Inbox} label="Inbox" count="3" active />
                        <Item icon={Star} label="Starred" />
                        <Item icon={Clock} label="Snoozed" />
                        <Item icon={Send} label="Sent" />
                        <Item icon={File} label="Drafts" />
                    </div>
                </div>

                {/* 3. Main Content Area */}
                <div style={{ flex: 1, background: 'white', borderRadius: '16px', marginRight: '16px', marginBottom: '16px', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 0 5px rgba(0,0,0,0.02)' }}>

                    {view === 'list' ? (
                        <>
                            {/* Toolbar */}
                            <div style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid #f2f2f2' }}>
                                <Square size={18} color="#444746" />
                                <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}><RotateCw size={18} color="#444746" /></button>
                                <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}><MoreVertical size={18} color="#444746" /></button>
                            </div>

                            {/* Tabs */}
                            <div style={{ display: 'flex', borderBottom: '1px solid #f2f2f2' }}>
                                <Tab icon={Inbox} label="Primary" active />
                                <Tab icon={ExternalLink} label="Promotions" />
                                <Tab icon={Grid} label="Social" />
                            </div>

                            {/* Email Rows */}
                            <div style={{ overflowY: 'auto', flex: 1 }}>
                                {emails.map(email => (
                                    <div
                                        key={email.id}
                                        onClick={() => email.id === 1 ? setView('detail') : null}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '8px 16px',
                                            borderBottom: '1px solid #f2f2f2',
                                            cursor: 'pointer',
                                            background: email.read ? 'white' : '#f2f6fc',
                                            gap: '1rem'
                                        }}
                                    >
                                        <Square size={18} color="#c7c7c7" />
                                        <Star size={18} color="#c7c7c7" />
                                        <span style={{ fontWeight: email.read ? 'normal' : 'bold', width: '200px', color: '#202124', fontSize: '0.9rem' }}>{email.sender}</span>
                                        <div style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.9rem', color: '#202124' }}>
                                            <strong style={{ fontWeight: email.read ? 'normal' : 'bold' }}>{email.subject}</strong>
                                            <span style={{ color: '#5f6368' }}> - {email.snippet}</span>
                                        </div>
                                        <span style={{ fontSize: '0.8rem', fontWeight: email.read ? 'normal' : 'bold', color: '#202124' }}>{email.time}</span>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        /* Detail View */
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ padding: '1rem', borderBottom: '1px solid #f2f2f2', display: 'flex', gap: '1rem' }}>
                                <button onClick={() => setView('list')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><ArrowLeft size={20} /></button>
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Printer size={20} /></button>
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}><ExternalLink size={20} /></button>
                            </div>

                            <div style={{ padding: '2rem 3rem', overflowY: 'auto', background: '#fff', height: '100%' }}>
                                {/* Brand Header */}
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '1.5rem',
                                        fontWeight: '800',
                                    }}>
                                        <Sparkles size={24} style={{ fill: 'url(#gradient)', stroke: 'none' }} />
                                        {/* Define SVG gradient for the icon since we can't easily gradient-fill an icon component without it */}
                                        <svg width="0" height="0">
                                            <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                                <stop stopColor="#9C27B0" offset="0%" />
                                                <stop stopColor="#FA2C68" offset="50%" />
                                                <stop stopColor="#FFC107" offset="100%" />
                                            </linearGradient>
                                        </svg>

                                        <span style={{
                                            background: 'linear-gradient(90deg, #FFC107 0%, #FA2C68 50%, #9C27B0 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            paddingBottom: '2px' // Prevent clipping
                                        }}>
                                            Emma AI
                                        </span>
                                    </div>
                                </div>

                                {/* Main Email Container */}
                                <div style={{ maxWidth: '600px', margin: '0 auto', background: '#faf5ff', borderRadius: '12px', overflow: 'hidden' }}>

                                    {/* Purple Hero Graphic Mockup */}
                                    <div style={{ background: '#f5e8ff', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                                        <img
                                            src="/campaign_graph.png"
                                            alt="Campaign Performance Graph"
                                            style={{ width: '100%', height: 'auto', display: 'block' }}
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div style={{ padding: '2.5rem', background: 'white', borderRadius: '0 0 12px 12px' }}>
                                        <div style={{ fontSize: '1rem', color: '#1f1f1f', marginBottom: '1.5rem', fontFamily: 'sans-serif' }}>
                                            <strong>From: Emma AI</strong>
                                        </div>

                                        <h1 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1f1f1f', marginBottom: '1rem', textAlign: 'left' }}>
                                            Campaign "North America | Web | USDC + Similar" starts receiving data
                                        </h1>

                                        <p style={{ lineHeight: '1.6', color: '#374151', marginBottom: '1rem', fontSize: '0.95rem' }}>
                                            Your campaign has started generating impressions and we're seeing the first batch of data coming in.
                                        </p>
                                        <p style={{ lineHeight: '1.6', color: '#374151', marginBottom: '2rem', fontSize: '0.95rem' }}>
                                            Click below to review the initial performance insights.
                                        </p>

                                        <button
                                            onClick={onOpenLink}
                                            style={{
                                                background: 'linear-gradient(135deg, #B045E6, #f43f5e)',
                                                color: 'white',
                                                border: 'none',
                                                padding: '12px 0',
                                                borderRadius: '8px',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                fontSize: '1rem',
                                                width: '100%',
                                                marginBottom: '2rem',
                                                boxShadow: '0 4px 6px rgba(176, 69, 230, 0.25)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.5rem'
                                            }}
                                        >
                                            <Sparkles size={18} fill="white" /> View Campaign Data
                                        </button>

                                        <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.5' }}>
                                            Best,<br />
                                            <strong>Emma AI</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

const Item = ({ icon: Icon, label, count, active }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 12px 0 26px',
        height: '32px',
        borderRadius: '0 16px 16px 0',
        background: active ? '#d3e3fd' : 'transparent',
        cursor: 'pointer',
        fontWeight: active ? '700' : '400',
        color: '#202124'
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <Icon size={18} strokeWidth={2} />
            <span style={{ fontSize: '14px' }}>{label}</span>
        </div>
        {count && <span style={{ fontSize: '12px' }}>{count}</span>}
    </div>
);

const Tab = ({ icon: Icon, label, active }) => (
    <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        height: '56px',
        color: active ? '#0b57d0' : '#5f6368',
        borderBottom: active ? '3px solid #0b57d0' : 'none',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        maxWidth: '250px',
        transition: 'background 0.2s'
    }}>
        <Icon size={20} />
        {label}
    </div>
);

// Helper for ArrowLeft which wasn't imported in previous replace, but I used it in detail view.
// Ensure it's imported at top. (Added to imports)

export default GmailMock;
