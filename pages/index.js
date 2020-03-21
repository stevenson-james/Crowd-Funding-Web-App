import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    // componentDidMount will not run on server rendering
    // so use getInitialProps (Next.js function) instead
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }

    render() {
        return <div>{this.props.campaigns[0]}</div>
    }
}

export default CampaignIndex;