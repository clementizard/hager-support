import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';

import { propTypes, defaultProps } from './Props';
import {
	Container,
	Content,
	Inner,
	Title,
} from './Styles';

const special = [
	'messages',
	'graph'
];

const MessageTable = ({ messages }) => {
	const labels = Object.keys(messages[0]);
	const headerCells = labels.map(label => <th>{label}</th>);

	return (
		<table style={{ gridArea: 'table', padding: 16 }}>
			<thead style={{ fontSize: '1.1rem', fontWeight: 600 }}>{headerCells}</thead>
			<tbody>
				{messages.map((message) => {
					const keys = Object.keys(message);
					return (<tr>{keys.map(key => <td>{message[key]}</td>)}</tr>);
				})}
			</tbody>
		</table>
	);
};
MessageTable.propTypes = {
	messages: PropTypes.array.isRequired
};

const getOption = (graph) => {
	// Build series and axis
	const series = [];
	const yAxis = [];
	graph.series.forEach((serie, index) => {
		series.push({
			name: serie.type,
			type: 'line',
			smooth: true,
			data: serie.data,
			yAxisIndex: index
		});
		if (yAxis.findIndex(el => el.name === serie.type) === -1) {
			yAxis.push({
				type: 'value',
				name: serie.type
			});
		}
	});

	return ({
		title: { text: graph.name },
		toolbox: {
			show: true,
			feature: {
				magicType: {
					type: ['line', 'bar'],
					title: {
						line: 'Line',
						bar: 'Bar'
					}
				}
			}
		},
		tooltip: { trigger: 'axis' },
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: graph.axis
		},
		yAxis,
		series
	});
};

const Details = ({ rowData, type }) => (
	<Container>
		<Inner data-cy={`devices-${type}-${rowData.type}`}>
			{rowData[type] && Object.keys(rowData[type]).map(key => (
				<Fragment key={key}>
					{!special.includes(key) && (
						<>
							<Title>{key}:</Title>
							<Content>
								{rowData[type][key]}
							</Content>
						</>
					)}
					{key === 'messages' && (<MessageTable messages={rowData[type][key]} />)}
					{key === 'graph' && (
						<div style={{ gridArea: 'graph', padding: 16 }}>
							<ReactEcharts
								echarts={echarts}
								option={getOption(rowData[type][key])}
							/>
						</div>
					)}
				</Fragment>
			))}
		</Inner>
	</Container>
);
Details.propTypes = propTypes;
Details.defaultProps = defaultProps;
Details.whyDidYouRender = true;

export default memo(Details);
