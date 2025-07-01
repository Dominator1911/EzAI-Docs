import type {NodeTypes} from '@xyflow/react';
import {AppNode} from './types';
import {AINode} from './AINode';
import {FrontEndNode} from './FrontEndNode';
import {BackEndNode} from './BackEndNode';
import {GroupNodeComponent} from './GroupNode';

export const initialNodes: AppNode[] = [
  {
    id: 'group-1',
    type: 'group',
    position: {x: -200, y: 100},
    style: {width: 550, height: 300},
    data: { label: 'Alpha' },
  },
  {
    id: 'input',
    type: 'input',
    position: { x: 0, y: 0 },
    data: { label: 'Start (25/07/01)' }
  },
  {
    id: 'f-1',
    type: 'frontend',
    position: { x: 30, y: 50 },
    data: { label: 'Frontend' },
    parentId: 'group-1',
    extent: 'parent'
  },
  {
    id: 'b-1',
    type: 'backend',
    position: { x: 200, y: 50 },
    data: { label: 'Backend' },
    parentId: 'group-1',
    extent: 'parent'
  },
  {
    id: 'a-1',
    type: 'ainode',
    position: { x: 370, y: 50 },
    data: { label: 'AI' },
    parentId: 'group-1',
    extent: 'parent'
  }
];

export const nodeTypes = {
  frontend: FrontEndNode,
  backend: BackEndNode,
  ainode: AINode,
  group: GroupNodeComponent,
} satisfies NodeTypes;
