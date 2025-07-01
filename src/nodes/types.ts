import type { Node, BuiltInNode } from '@xyflow/react';

export type FrontEndNode = Node<{ label: string }, 'frontend'>;
export type BackEndNode = Node<{ label: string }, 'backend'>;
export type AINode = Node<{ label: string }, 'ainode'>;
export type GroupNode = Node<{ label: string }, 'group'>;
export type AppNode = BuiltInNode | FrontEndNode | BackEndNode | AINode | GroupNode;
