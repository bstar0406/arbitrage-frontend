// import Landing from './landing/Landing';
// import Exchange from './exchange/Exchange';
// import Market from './market/Market';
// import News from './news/News';
// import Support from './support/Support';
// import BuyCrypto from './buycrypto/BuyCrypto';
// import Rewards from './rewards/Rewards';
import FlashLoanBot from './flashLoanBot/FlashLoanBot';

const appRoutes = {
    flashLoanBot: {
        path: '/flashLoanBot',
        title: 'FlashLoanBot',
        description: 'Flash Loan Bot',
        requireLogin: false,
        Page: FlashLoanBot,
    },
    // home: {
    //     path: '/',
    //     title: 'FlashLoanBot',
    //     description: 'Flash Loan Bot',
    //     requireLogin: false,
    //     Page: FlashLoanBot,
    // },
    // exchange: {
    //     path: '/exchange/BTC-USDT',
    //     title: 'Exchange',
    //     description: 'Exchange Page',
    //     requireLogin: true,
    //     Page: Exchange,
    // },
    // market: {
    //     path: '/markets',
    //     title: 'Market',
    //     description: 'Market Page',
    //     requireLogin: true,
    //     Page: Market,
    // },
    // news: {
    //     path: '/news/blog',
    //     title: 'News',
    //     description: 'News Page',
    //     requireLogin: true,
    //     Page: News,
    // },
    // support: {
    //     path: '/hc/en-us',
    //     title: 'Support',
    //     description: 'Support Page',
    //     requireLogin: true,
    //     Page: Support,
    // },
    // buycrypto: {
    //     path: '/buycoin',
    //     title: 'Buycoin',
    //     description: 'Buycoin Page',
    //     requireLogin: true,
    //     Page: BuyCrypto,
    // },
    // rewards: {
    //     path: '/rewards',
    //     title: 'Rewards',
    //     description: 'Rewards Page',
    //     requireLogin: true,
    //     Page: Rewards,
    // },
};
export default appRoutes;