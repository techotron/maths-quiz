'use client';

import Link from 'next/link';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {XMarkIcon} from "@heroicons/react/16/solid";

export function DefaultSidebar() {
    return (
        <Card className="bg-black h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Link href="/">
                    <Typography className="text-gray-400" variant="h5">
                        Home
                    </Typography>
                </Link>
            </div>
            <List className="text-gray-400">
                <Link href="/multiplication">
                    <ListItem>
                        <ListItemPrefix>
                            <XMarkIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Multiplication
                    </ListItem>
                </Link>
            </List>
        </Card>
    );
}