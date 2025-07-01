import type {Edge, EdgeTypes} from '@xyflow/react';

export const style = { stroke: '#FF0072', strokeWidth: 2};

export const initialEdges: Edge[] = [
    {id: 'input->f-1', source: 'input', target: 'f-1', animated: true, style: style},
    {id: 'input->b-1', source: 'input', target: 'b-1', animated: true, style: style},
    {id: 'input->a-1', source: 'input', target: 'a-1', animated: true, style: style}
];

export const edgeTypes = {} satisfies EdgeTypes;
