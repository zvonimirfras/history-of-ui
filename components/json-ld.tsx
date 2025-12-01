import Head from 'next/head';

interface JsonLdProps {
	data: Record<string, any>;
}

export const JsonLd = ({ data }: JsonLdProps) => (
	<Head>
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
			key="json-ld"
		/>
	</Head>
);

