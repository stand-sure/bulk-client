/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createJobFromDiscriminatorValue, type Job } from '../../models/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /jobs/{id}
 */
export interface JobsItemRequestBuilder extends BaseRequestBuilder<JobsItemRequestBuilder> {
    /**
     * Gets a job by id
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Job>}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Job | undefined>;
    /**
     * Gets a job by id
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const JobsItemRequestBuilderUriTemplate = "{+baseurl}/jobs/{id}";
/**
 * Metadata for all the requests in the request builder.
 */
export const JobsItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: JobsItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createJobFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */