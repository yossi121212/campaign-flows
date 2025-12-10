import { motion } from 'framer-motion';
import { RefreshCw, ArrowLeft, ArrowRight, Lock } from 'lucide-react';

const BrowserWindow = ({ children, url = 'https://platform.com/campaigns/new' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Soft Apple-like ease
            style={{
                width: '100%',
                maxWidth: '1200px',
                height: '80vh',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 20px 50px -12px rgba(0,0,0,0.15)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                border: '1px solid #e2e8f0'
            }}
        >
            {/* Browser Bar */}
            <div style={{
                background: '#f1f5f9',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                borderBottom: '1px solid #e2e8f0'
            }}>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', color: '#94a3b8' }}>
                    <ArrowLeft size={16} />
                    <ArrowRight size={16} />
                    <RefreshCw size={16} />
                </div>

                <div style={{
                    flex: 1,
                    background: 'white',
                    borderRadius: '6px',
                    padding: '0.3rem 0.5rem',
                    fontSize: '0.85rem',
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                }}>
                    <Lock size={12} fill="#94a3b8" />
                    {url}
                </div>
            </div>

            {/* Content */}
            <div style={{ flex: 1, overflow: 'auto', position: 'relative' }}>
                {children}
            </div>
        </motion.div>
    );
};

export default BrowserWindow;
