import {Handle, Position, type NodeProps} from '@xyflow/react';

import {type AINode} from './types';

export function AINode({
                                 data,
                                 selected,
                             }: NodeProps<AINode>) {
    return (
        <div className={`react-flow__node-default ${selected ? 'selected' : ''}`} style={{
            backgroundColor: '#00ff66',
            color: 'black',
            borderRadius: '8px',
            padding: '10px',
            width: '130px',
            boxShadow: selected ? '0 0 0 2px #000' : 'none'
        }}>
            <div style={{fontWeight: 'bold'}}>
                {data.label || 'AI'}
            </div>

            <Handle
                type="target"
                position={Position.Top}
                style={{background: '#000000'}}
            />
            <Handle
                type="source"
                position={Position.Bottom}
                style={{background: '#000000'}}
            />
        </div>
    );
}