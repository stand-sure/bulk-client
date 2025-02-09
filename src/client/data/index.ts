/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { DataItemRequestBuilderRequestsMetadata, type DataItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /data
 */
export interface DataRequestBuilder extends BaseRequestBuilder<DataRequestBuilder> {
    /**
     * Gets an item from the ApiSdk.data.item collection
     * @param id Unique identifier of the item
     * @returns {DataItemRequestBuilder}
     */
     byId(id: string) : DataItemRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const DataRequestBuilderUriTemplate = "{+baseurl}/data";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DataRequestBuilderNavigationMetadata: Record<Exclude<keyof DataRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byId: {
        requestsMetadata: DataItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["id"],
    },
};
/* tslint:enable */
/* eslint-enable */
