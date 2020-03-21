import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
    // componentDidMount will not run on server rendering
    // so use getInitialProps (Next.js function) instead
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            };
        });
        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <div>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                    <h3>Open Campaings</h3>
                    <Button
                        floated="right"
                        content="Create Campaign"
                        icon="add circle"
                        primary
                    />
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;