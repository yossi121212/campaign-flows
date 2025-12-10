import React from 'react';
import {
    ChevronDown,
    HelpCircle,
    Search,
    Filter,
    Download,
    Link,
    MoreVertical,
    Square,
    CheckSquare
} from 'lucide-react';

const TwitterTable = ({ onOptionA, onOptionB, onStay }) => {

    const campaigns = [
        { id: 1, name: 'AddressableAI_Ithaca_Test_Managed_26-06-2024_08:12', status: 'Draft', color: '#f59e0b', spend: '0.00', results: 0 },
        { id: 2, name: 'AddressableAI_Ritestream_Test_Managed_30-05-2024_14:12', status: 'Running', color: '#22c55e', spend: '124.50', results: 12 },
        { id: 3, name: 'AddressableAI_tizz_test_Managed_23-05-2024_15:25', status: 'Draft', color: '#f59e0b', spend: '0.00', results: 0 },
        { id: 4, name: 'AddressableAI_Test_-_DNU_Managed_15-04-2024_11:56', status: 'Paused', color: '#64748b', spend: '45.20', results: 3 },
    ];

    const TableRow = ({ camp, idx }) => (
        <div style={{ display: 'grid', gridTemplateColumns: '40px 300px 100px 100px 100px 100px 120px 120px 100px', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #f1f5f9', fontSize: '0.85rem', color: '#334155' }}>
            <div style={{ paddingLeft: '1rem' }}><Square size={16} color="#cbd5e1" /></div>
            <div style={{ color: '#1d9bf0', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '1rem' }}>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '280px' }}>{camp.name}</span>
                <MoreVertical size={14} color="#94a3b8" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: camp.color }}></div>
                {camp.status}
            </div>
            <div>Reach</div>
            <div>{camp.results}</div>
            <div>₪{camp.spend}</div>
            <div>₪{camp.results > 0 ? (camp.spend / camp.results).toFixed(2) : '0.00'}</div>
            <div>0</div>
            <div>₪0.00</div>
        </div>
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>

            {/* Top Black Bar */}
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

            {/* Date / Filters Range Generic */}
            <div style={{ borderBottom: '1px solid #e2e8f0', height: '50px', display: 'flex', alignItems: 'center', padding: '0 2rem', gap: '2rem', fontSize: '0.85rem' }}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                    <span>Dec 3, 2025</span>
                    <span>Dec 4, 2025</span>
                    <span>Dec 5, 2025</span>
                    <span>Dec 6, 2025</span>
                    <span>Dec 7, 2025</span>
                    <span>Dec 8, 2025</span>
                </div>
            </div>

            {/* Tabs */}
            <div style={{ padding: '0 2rem', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0' }}>
                    <div style={{ padding: '0.75rem 1.5rem', fontWeight: '600', color: '#64748b', cursor: 'pointer' }}>Funding sources</div>
                    <div style={{ padding: '0.75rem 1.5rem', fontWeight: '600', color: '#0f172a', borderBottom: '3px solid #000', cursor: 'pointer' }}>Campaigns</div>
                    <div style={{ padding: '0.75rem 1.5rem', fontWeight: '600', color: '#64748b', cursor: 'pointer' }}>Ad groups</div>
                    <div style={{ padding: '0.75rem 1.5rem', fontWeight: '600', color: '#64748b', cursor: 'pointer' }}>Ads</div>
                    <div style={{ padding: '0.75rem 1.5rem', fontWeight: '600', color: '#64748b', cursor: 'pointer' }}>Audiences</div>
                </div>
            </div>

            {/* Action Toolbar */}
            <div style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button style={{ background: 'white', border: '1px solid #e2e8f0', padding: '0.3rem 1rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 'bold', color: '#475569', cursor: 'pointer' }}>Resume</button>
                    <button style={{ background: 'white', border: '1px solid #e2e8f0', padding: '0.3rem 1rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 'bold', color: '#475569', cursor: 'pointer' }}>Pause</button>
                    <button style={{ background: '#ff8a80', color: 'white', border: 'none', padding: '0.4rem 1.2rem', borderRadius: '999px', fontWeight: 'bold', fontSize: '0.9rem' }}>Delete</button>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>
                        <CheckSquare size={16} fill="#000" color="#fff" /> Hide deleted
                    </div>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white', border: '1px solid #e2e8f0', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', fontWeight: '500' }}>
                        Metrics: Website conversions <ChevronDown size={14} />
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white', border: '1px solid #e2e8f0', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.9rem', fontWeight: '500' }}>
                        <Download size={14} /> Export <ChevronDown size={14} />
                    </button>
                </div>
            </div>

            {/* Table Filter / Headers */}
            <div style={{ flex: 1, padding: '0 2rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '40px 300px 100px 100px 100px 100px 120px 120px 100px', background: '#f8fafc', padding: '0.75rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', fontSize: '0.8rem', fontWeight: 'bold', color: '#64748b' }}>
                    <div style={{ paddingLeft: '1rem' }}><Square size={16} /></div>
                    <div>Campaign Name</div>
                    <div>Status</div>
                    <div>Objective</div>
                    <div>Purchases</div>
                    <div>Cost per purchase</div>
                    <div>Purchases - sale amount</div>
                    <div>Link clicks</div>
                    <div>Cost per link click</div>
                </div>

                {/* List */}
                <div style={{ overflowY: 'auto', flex: 1 }}>
                    {campaigns.map((c, i) => <TableRow key={c.id} camp={c} idx={i} />)}
                </div>
            </div>

        </div>
    );
};

export default TwitterTable;
