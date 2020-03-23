import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xf3d87aA06Ced63DC5Eee17aA7d5FE8DBDAf2D708'
);

export default instance;