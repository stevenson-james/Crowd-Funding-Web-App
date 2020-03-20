import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x23b4DbcBE8Fe0247cB555F0443c333785a5F3f3c'
);

export default instance;