import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default () => (
	<StaticQuery
		query={graphql`
			query helmetQuery {
				site {
					siteMetadata {
						title
						author
						imageUrl
						description
						keywords
					}
				}
			}
		`}
		render={data => (
			<Helmet>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
				/>
				<meta name="description" content={data.site.siteMetadata.description} />
				<meta name="keywords" content={data.site.siteMetadata.keywords} />
				<title>{data.site.siteMetadata.title}</title>
				<html lang="nl" />
				{/* Google / Search Engine Meta Tags */}
				<meta itemprop="name" content={data.site.siteMetadata.author} />
				<meta
					itemprop="description"
					content={data.site.siteMetadata.description}
				/>
				<meta itemprop="image" content={data.site.siteMetadata.imageUrl} />

				<script src="https://kit.fontawesome.com/a0a8c9f99c.js" crossorigin="anonymous"></script>
			</Helmet>
		)}
	/>
);
