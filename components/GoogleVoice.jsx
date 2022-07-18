import Head from 'next/head'
import { useGetProducts } from '../services'
import React from 'react'
import { Product } from './Product'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const GoogleVoice = () => {
  const { isLoading, data: products } = useGetProducts()
  const showSkeleton = (num) => {
    return (
      <>
        {Array.from(Array(num).keys()).map((el, index) => (
          <Skeleton key={index} className="h-44" inline={true} />
        ))}
      </>
    )
  }
  const colors = ['#E0203E', '#661090', '#16a085', '#2980b9', '#e67e22']
  return (
    <>
      <Head>
        <title>Buy 20 Google Voice</title>
      </Head>
      <div className="bg-gray-200 min-h-screen py-4 container relative mx-auto flex flex-col items-center justify-center px-4 lg:px-10">
        <div className=" px-2 py-8 lg:px-8 w-full mx-auto max-w-full grid lg:grid-cols-4 gap-4">
          {isLoading && showSkeleton(8)}
          {products?.map((item, index) => (
            <Product key={item?.id} item={item} color={colors[index % colors.length]} />
          ))}
          {isLoading ||
            (products?.length === 0 && (
              <div className="text-xl font-josefin font-medium text-rose-600">
                20 Google Voice <span className="font-bold capitalize text-sky-600">Package</span> is Not Available RIght Now Please Select Another Package or
                Custom Number
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
