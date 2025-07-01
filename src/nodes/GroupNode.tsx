import { type NodeProps } from '@xyflow/react';
import { type GroupNode } from './types';

export function GroupNodeComponent({
  data,
}: NodeProps<GroupNode>) {
  return (
      <>
          <div style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              backgroundColor: '#ffffff',
              padding: '2px 8px',
              fontWeight: 'bold',
              fontSize: '12px'
          }}>
              {data.label || 'Group'}
          </div>
      </>
  );
}