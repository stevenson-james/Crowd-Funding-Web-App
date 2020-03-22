import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xD88e91D497664f9Ea4bce9a51410CF52d3cE8A10'
);

export default instance;