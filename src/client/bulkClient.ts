/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { DataRequestBuilderNavigationMetadata, type DataRequestBuilder } from './data/index.js';
// @ts-ignore
import { JobsRequestBuilderNavigationMetadata, JobsRequestBuilderRequestsMetadata, type JobsRequestBuilder } from './jobs/index.js';
// @ts-ignore
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
// @ts-ignore
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
// @ts-ignore
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
// @ts-ignore
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
// @ts-ignore
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface BulkClient extends BaseRequestBuilder<BulkClient> {
    /**
     * The data property
     */
    get data(): DataRequestBuilder;
    /**
     * The jobs property
     */
    get jobs(): JobsRequestBuilder;
}
/**
 * Instantiates a new {@link BulkClient} and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
// @ts-ignore
export function createBulkClient(requestAdapter: RequestAdapter) {
    registerDefaultSerializer(JsonSerializationWriterFactory);
    registerDefaultSerializer(TextSerializationWriterFactory);
    registerDefaultSerializer(FormSerializationWriterFactory);
    registerDefaultSerializer(MultipartSerializationWriterFactory);
    registerDefaultDeserializer(JsonParseNodeFactory);
    registerDefaultDeserializer(TextParseNodeFactory);
    registerDefaultDeserializer(FormParseNodeFactory);
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<BulkClient>(requestAdapter, pathParameters, BulkClientNavigationMetadata, undefined);
}
/**
 * Uri template for the request builder.
 */
export const BulkClientUriTemplate = "{+baseurl}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const BulkClientNavigationMetadata: Record<Exclude<keyof BulkClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    data: {
        navigationMetadata: DataRequestBuilderNavigationMetadata,
    },
    jobs: {
        requestsMetadata: JobsRequestBuilderRequestsMetadata,
        navigationMetadata: JobsRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
