import { useState } from 'react';
import {
    Menu, Search, Settings, HelpCircle, Grid,
    Plus, Inbox, Star, Clock, Send, File,
    ChevronLeft, MoreVertical, Printer, ExternalLink,
    Square, CheckSquare, RotateCw, ArrowLeft, Image as ImageIcon
} from 'lucide-react';

const AdformEmail = ({ onOpenLink }) => {
    const [view, setView] = useState('list');

    // Mock Data
    const emails = [
        { id: 1, sender: 'Addressable', subject: 'Addressable: Your Campaign Started Collecting data!', snippet: 'Hi Queenb, Your campaign has started generating impressions...', time: '9:14 AM', read: false },
        { id: 2, sender: 'Adform Team', subject: 'Your campaign is now running', snippet: 'Your ads are now live on Adform...', time: 'Yesterday', read: true },
        { id: 3, sender: 'Google Workspace', subject: 'Security alert', snippet: 'New sign-in detected on your account...', time: 'Dec 4', read: true },
    ];

    return (
        <div style={{ background: '#f6f8fc', height: '100%', display: 'flex', flexDirection: 'column', fontFamily: 'Roboto, Arial, sans-serif' }}>

            {/* 1. Header (Gmail Wrapper) */}
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

                                {/* Standard Gmail Header Details */}
                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                        <h2 style={{ margin: 0, fontSize: '1.375rem', fontWeight: '400', color: '#202124' }}>
                                            Addressable: Your Campaign Started Collecting data!
                                        </h2>
                                        <div style={{ background: '#ddd', padding: '0 4px', borderRadius: '4px', fontSize: '0.75rem', color: '#666' }}>Inbox</div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: '#5f6368' }}>
                                        <span style={{ fontWeight: '700', color: '#202124' }}>Addressable</span>
                                        <span>&lt;No-reply@app.addressable.io&gt;</span>
                                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Unsubscribe</span>
                                        <div style={{ flex: 1 }}></div>
                                        <span>9:14 AM (8 hours ago)</span>
                                        <Star size={18} color="#5f6368" />
                                        <MoreVertical size={18} color="#5f6368" />
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: '#5f6368', marginTop: '4px' }}>to me <span style={{ fontSize: '10px' }}>▼</span></div>
                                </div>


                                {/* FIGMA DESIGN IMPLEMENTATION */}
                                <div style={{
                                    width: '550px',
                                    background: '#FFFFFF',
                                    borderRadius: '16px',
                                    border: '1px solid #e5e7ee',
                                    overflow: 'hidden',
                                    margin: '0 auto',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>

                                    {/* Header Image Area */}
                                    <div style={{
                                        height: '195px',
                                        background: '#F7E8FF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            width: '120px',
                                            height: '100px',
                                            background: 'linear-gradient(135deg, #CF8BF3 0%, #A742EB 100%)',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 12px rgba(167, 66, 235, 0.2)'
                                        }}>
                                            <ImageIcon size={48} color="white" />
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

                                        <div style={{ color: '#6A7290', fontSize: '14px', lineHeight: '30px' }}>
                                            Hi Queenb
                                        </div>

                                        <h1 style={{
                                            color: '#2D3142',
                                            fontSize: '20px',
                                            fontWeight: '700',
                                            lineHeight: '32px',
                                            margin: 0
                                        }}>
                                            Campaign "North America | Web | USDC + Similar" starts receiving data!
                                        </h1>

                                        <div style={{ color: '#6A7290', fontSize: '14px', lineHeight: '24px' }}>
                                            <p style={{ margin: '0 0 16px 0' }}>
                                                Your campaign has started generating impressions and we're seeing the first batch of data coming in.
                                            </p>
                                            <p style={{ margin: 0 }}>
                                                Click below to review the initial performance insights.
                                            </p>
                                        </div>

                                        <button
                                            onClick={onOpenLink}
                                            style={{
                                                background: '#B045E6',
                                                color: '#FFFFFF',
                                                border: 'none',
                                                borderRadius: '8px',
                                                padding: '12px 24px',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                width: '100%',
                                                cursor: 'pointer',
                                                marginTop: '8px',
                                                marginBottom: '8px',
                                                transition: 'background 0.2s'
                                            }}
                                            onMouseOver={(e) => e.target.style.background = '#9C3DD0'}
                                            onMouseOut={(e) => e.target.style.background = '#B045E6'}
                                        >
                                            View Adform Campaign Data
                                        </button>

                                        <div style={{ color: '#2D3142', fontSize: '14px', lineHeight: '24px', marginTop: '8px' }}>
                                            <p style={{ margin: 0, fontWeight: '400' }}>Best regards,</p>
                                            <p style={{ margin: 0, fontWeight: '400' }}>The Addressable Team</p>
                                        </div>

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

export default AdformEmail;
