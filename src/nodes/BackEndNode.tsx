import {Handle, Position, type NodeProps} from '@xyflow/react';

import {type BackEndNode} from './types';

export function BackEndNode({
                                 data,
                                 selected,
                             }: NodeProps<BackEndNode>) {
    return (
        <div className={`react-flow__node-default ${selected ? 'selected' : ''}`} style={{
            backgroundColor: '#9999ff',
            color: 'black',
            borderRadius: '8px',
            padding: '10px',
            width: '130px',
            boxShadow: selected ? '0 0 0 2px #000' : 'none'
        }}>
            <div style={{fontWeight: 'bold'}}>
                {data.label || 'Backend'}
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