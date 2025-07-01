import {useCallback} from 'react';
import {
    ReactFlow,
    Background,
    Controls,
    MiniMap,
    addEdge,
    useNodesState,
    useEdgesState,
    type OnConnect
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import {initialNodes, nodeTypes} from '../nodes';
import {initialEdges, edgeTypes, style} from '../edges';
import {AppNode} from '../nodes/types';

const nodeClassName = (node: AppNode) => node.type || 'default';

const FlowPage = () => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect: OnConnect = useCallback(
        (connection) => setEdges((edges) => addEdge({...connection, animated: true, style}, edges)),
        [setEdges]
    );

    return (
        <div style={{width: '100%', height: '100vh'}}>
            <ReactFlow
                nodes={nodes}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                edges={edges}
                edgeTypes={edgeTypes}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Background/>
                <MiniMap zoomable pannable nodeClassName={nodeClassName}/>
                <Controls/>
            </ReactFlow>
        </div>
    );
};

export default FlowPage;
