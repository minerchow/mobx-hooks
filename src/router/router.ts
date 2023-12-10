import { lazy } from 'react';

const router =  [{
    path : '/count',
    name : 'count',
    component: lazy(() => import('@/containers/count'))
}]

export default router;