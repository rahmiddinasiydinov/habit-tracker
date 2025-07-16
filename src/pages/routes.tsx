import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Rootlayout = lazy(() => import('@/pages/root-layout'));
const Dashboard = lazy(() => import('./dashboard'));
const StatsPage = lazy(() => import('./stats'));
const HabitDetailPage = lazy(() => import('./hapit-detail'));
const ErrorPage = lazy(() => import('./error'));
const SettingsPage = lazy(() => import('./settings'));

export const router = createBrowserRouter([
    {
        path: '/', element: <Rootlayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'stats', element: <StatsPage /> },
            { path: 'habit/:id', element: <HabitDetailPage /> },
            { path: 'settings', element: <SettingsPage /> }
        ]
    }
])