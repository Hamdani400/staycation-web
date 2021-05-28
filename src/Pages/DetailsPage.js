import React, {Component} from 'react';

import Header from 'Parts/Header';
import PageDetailTitle from 'Parts/PageDetailsTitle';
import FeaturedImage from 'Parts/FeaturedImage';

import itemDetails from 'json/itemDetails.json'

export default class DetailsPage extends Component {
  componentDidMount () {
    window.title = 'Details Page';
    window.scrollTo (0, 0);
  }

    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            {pageTitle: "House Details", pageHref: ""}
      ]
        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle data={itemDetails} breadcrumb={breadcrumb}></PageDetailTitle>
                <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
            </>
    )
  }
}