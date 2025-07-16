import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Rootlayout =lazy(() => import('@/pages/root-layout')) ;
const Dashboard  = lazy(() => import('./dashboard'));
const StatsPage  = lazy(() => import('./stats'));
const HabitDetailPage  = lazy(() => import('./hapit-detail'));
const NotFound  = lazy(() => import('./not-found'));

export const router = createBrowserRouter([
    {
        path: '/', element: <Rootlayout />,
        errorElement: <NotFound/>,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'stats', element: <StatsPage /> },
            { path: 'habit/:id', element: <HabitDetailPage /> }
        ]
    }
])