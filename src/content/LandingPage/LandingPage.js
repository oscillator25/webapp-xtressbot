import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';
import { InfoSection, InfoCard } from '../../components/Info';
import Globe32 from '@carbon/icons-react/lib/globe/32';
import PersonFavorite32 from '@carbon/icons-react/lib/person--favorite/32';
import Application32 from '@carbon/icons-react/lib/application/32';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">Twinning the Sustainability</h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="About">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      What is XtressTwins?
                    </h2>
                    <p className="landing-page__p">001</p>
                    <Button>Learn more</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      className="landing-page__illo"
                      src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                      alt="Carbon illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Design">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h2 className="landing-page__subheading">
                      What is XtressTwins?
                    </h2>
                    <p className="landing-page__p">001</p>
                    <Button>Learn more</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      className="landing-page__illo"
                      src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                      alt="Carbon illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Develop">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    <h2 className="landing-page__subheading">
                      What is XtressTwins?
                    </h2>
                    <p className="landing-page__p">001</p>
                    <Button>Learn more</Button>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                    <img
                      className="landing-page__illo"
                      src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                      alt="Carbon illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <InfoSection heading="The Principles" className="landing-page__r3">
        <InfoCard
          heading="XtressTwins is Open"
          body="It's a distributed effort, guided by the principles of the open-source movement. XtressTwins users will also be it's makers, and everyone is encouraged to contribute."
          icon={<PersonFavorite32 />}
        />
        <InfoCard
          heading="XtressTwins is Modular"
          body="XtressTwins modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
          icon={<Application32 />}
        />
        <InfoCard
          heading="XtressTwins is Consistent"
          body="Based on the comprehensive architecture, every element and component of XtressTwins is designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
          icon={<Globe32 />}
        />
      </InfoSection>
    </div>
  );
};

export default LandingPage;
