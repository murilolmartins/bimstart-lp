import React from 'react';

import UnderMaintenance from '@/components/Common/UnderMaintenance';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'BIM START - Serviços'
};

export default function Page() {
    return <UnderMaintenance />;
}
