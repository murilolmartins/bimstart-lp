import UnderMaintenance from '@/components/Common/UnderMaintenance';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: 'BIM START - Corporativo'
};


export default function Page() {
    return <UnderMaintenance />;
}
