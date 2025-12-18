import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InternalAddCreative from './screens/InternalAddCreative';
import TwitterLaunch from './screens/TwitterLaunch';
import TwitterTable from './screens/TwitterTable';
import OptionB_CampaignPage from './screens/OptionB_CampaignPage';
import GmailMock from './screens/GmailMock';
import FinalDashboard from './screens/FinalDashboard';
import AdformPending from './screens/AdformPending';
import AdformWaiting24h from './screens/AdformWaiting24h';
import AdformEmail from './screens/AdformEmail';
import AdformDashboard from './screens/AdformDashboard';
import Sidebar from './components/Sidebar';
import InfoPanel from './components/InfoPanel';
import BrowserWindow from './components/BrowserWindow';

function App() {
    const [step, setStep] = useState('internal-start');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [infoPanelOpen, setInfoPanelOpen] = useState(true);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    const getUrlForStep = (s) => {
        if (s.includes('twitter')) return 'https://ads.twitter.com/campaigns/create';
        if (s.includes('gmail')) return 'https://mail.google.com/mail/u/0/#inbox';
        if (s.includes('adform')) return 'https://adform.com/campaigns';
        return 'app.addressable.io/campaigns/post-launch-test';
    };

    const renderScreen = () => {
        switch (step) {
            case 'internal-start':
                return <InternalAddCreative onNext={() => setStep('twitter-launch')} />;
            case 'twitter-launch':
                return <TwitterLaunch onLaunch={() => setStep('twitter-table')} />;
            case 'twitter-table':
                return <TwitterTable
                    onOptionA={() => setStep('internal-start')}
                    onOptionB={() => setStep('campaign-page')}
                    onStay={() => alert('User chooses to stay on the external platform (Twitter) to manage other ads.')}
                />;
            case 'campaign-page':
                return <OptionB_CampaignPage onSimulateWait={() => setStep('gmail-mock')} />;
            case 'gmail-mock':
                return <GmailMock onOpenLink={() => setStep('final-dashboard')} />;
            case 'final-dashboard':
                return <FinalDashboard onRestart={() => setStep('internal-start')} />;
            case 'adform-pending':
                return <AdformPending onNext={() => setStep('adform-waiting-24h')} />;
            case 'adform-waiting-24h':
                return <AdformWaiting24h onNext={() => setStep('adform-email')} />;
            case 'adform-email':
                return <AdformEmail onOpenLink={() => setStep('adform-dashboard')} />;
            case 'adform-dashboard':
                return <AdformDashboard onRestart={() => setStep('adform-pending')} />;
            default:
                return <div>Unknown Step</div>;
        }
    };

    const mainContentStyle = {
        marginLeft: sidebarOpen ? '260px' : '60px',
        marginRight: infoPanelOpen ? '360px' : '0px', // 300px width + 60px Gap
        minHeight: '100vh',
        width: `calc(100% - ${sidebarOpen ? '260px' : '60px'} - ${infoPanelOpen ? '360px' : '0px'})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem',
        boxSizing: 'border-box',
        transition: 'all 0.3s ease'
    };

    return (
        <div style={{ display: 'flex', background: '#f8fafc' }}>
            <Sidebar currentStep={step} setStep={setStep} isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />

            <div style={mainContentStyle}>
                <BrowserWindow url={getUrlForStep(step)}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            style={{ width: '100%', height: '100%' }}
                        >
                            {renderScreen()}
                        </motion.div>
                    </AnimatePresence>
                </BrowserWindow>
            </div>

            <InfoPanel
                currentStep={step}
                isOpen={infoPanelOpen}
                toggle={() => setInfoPanelOpen(!infoPanelOpen)}
                setStep={setStep} // Pass navigation control to panel
            />
        </div>
    );
}

export default App;
