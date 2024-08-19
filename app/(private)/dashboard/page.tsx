import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex min-h-screen'>
        <div className="flex-1 bg-gray-100 dark:bg-gray-950">
            <div className="p-6 grid gap-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between pb-2'>
                            <CardTitle className='text-sm font-medium'>
                                Total Amount
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className='text-2xl font-bold'>
                                $240,200.21
                            </div>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                                +10% from last month
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className='grid gap-6'>
                    <Card>
                        <CardHeader className='flex flex-row items-center justify-between pb-2'>
                            <CardTitle className='text-sm font-medium'>
                                Recent SignUps
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Plan</TableHead>
                                        <TableHead>Date</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    <TableRow>
                                        <TableCell>João</TableCell>
                                        <TableCell>contact@joaopedrocosso.com</TableCell>
                                        <TableCell>Pro</TableCell>
                                        <TableCell>2024-08-19</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard