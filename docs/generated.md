## Function: `generate_unique_hex_id`

**Arguments:** 

**Description:**

Generate a unique hexadecimal identifier

Returns:
    str: a unique hexadecimal string

## Function: `generate_hash_from_string`

**Arguments:** input_string

**Description:**

Generate a hash for the given string and return it as a hexadecimal string.

Args:
    input_string (str): The input string to hash.

Returns:
    str: The hexadecimal hash of the input string.

# Class: `SqlQueryResult`

**Description:**

None

# Class: `IndexifyClient`

**Description:**

IndexifyClient is the main entry point for the SDK.
For the full list of client features, see the
[httpx Client documentation](https://www.python-httpx.org/api/#client).

:param service_url: The URL of the Indexify service to connect to.
:param args: Arguments to pass to the httpx.Client constructor
:param kwargs: Keyword arguments to pass to the httpx.Client constructor

Example usage:
```
from indexify import IndexifyClient

client = IndexifyClient()
assert client.heartbeat() == True
```

## Function: `__init__`

**Arguments:** self, service_url, namespace, config_path

**Description:**

None

## Function: `with_mtls`

**Arguments:** cls, cert_path, key_path, ca_bundle_path, service_url

**Description:**

Create a client with mutual TLS authentication. Also enables HTTP/2,
which is required for mTLS.
NOTE: mTLS must be enabled on the Indexify service for this to work.

:param cert_path: Path to the client certificate. Resolution handled by httpx.
:param key_path: Path to the client key. Resolution handled by httpx.
:param args: Arguments to pass to the httpx.Client constructor
:param kwargs: Keyword arguments to pass to the httpx.Client constructor
:return: A client with mTLS authentication

Example usage:
```
from indexify import IndexifyClient

client = IndexifyClient.with_mtls(
    cert_path="/path/to/cert.pem",
    key_path="/path/to/key.pem",
)
assert client.heartbeat() == True
```

## Function: `_request`

**Arguments:** self, method

**Description:**

None

## Function: `get`

**Arguments:** self, endpoint

**Description:**

Make a GET request to the Indexify service.

:param endpoint: The endpoint to make the request to.

Example usage:
```
from indexify import IndexifyClient

client = IndexifyClient()
response = client.get("namespaces")
print(response.json())
```

## Function: `post`

**Arguments:** self, endpoint

**Description:**

Make a POST request to the Indexify service.

:param endpoint: The endpoint to make the request to.

Example usage:

```
from indexify import IndexifyClient

client = IndexifyClient()
response = client.post("namespaces", json={"name": "my-repo"})
print(response.json())
```

## Function: `put`

**Arguments:** self, endpoint

**Description:**

Make a PUT request to the Indexify service.

:param endpoint: The endpoint to make the request to.

Example usage:

```
from indexify import IndexifyClient

client = IndexifyClient()
response = client.put("namespaces", json={"name": "my-repo"})
print(response.json())
```

## Function: `delete`

**Arguments:** self, endpoint

**Description:**

Make a DELETE request to the Indexify service.

:param endpoint: The endpoint to make the request to.

Example usage:

```
from indexify import IndexifyClient

client = IndexifyClient()
response = client.delete("namespaces")
print(response.json())
```

## Function: `close`

**Arguments:** self

**Description:**

Close the underlying httpx.Client.

## Function: `__enter__`

**Arguments:** self

**Description:**

None

## Function: `__exit__`

**Arguments:** self, exc_type, exc_value, traceback

**Description:**

None

## Function: `heartbeat`

**Arguments:** self, heartbeat_response

**Description:**

Check if the Indexify service is alive.

## Function: `namespaces`

**Arguments:** self

**Description:**

Get a list of all namespaces.

## Function: `create_namespace`

**Arguments:** self, namespace, extraction_graphs, labels, service_url

**Description:**

Create a new namespace.

Returns:
    IndexifyClient: a new client with the given namespace

## Function: `_add_content_url`

**Arguments:** self, content

**Description:**

Add download content_url url property

## Function: `indexes`

**Arguments:** self

**Description:**

Get the indexes of the current namespace.

Returns:
    List[Index]: list of indexes in the current namespace

## Function: `extractors`

**Arguments:** self

**Description:**

Get a list of all extractors.

Returns:
    List[Extractor]: list of extractors

## Function: `get_extraction_graphs`

**Arguments:** self

**Description:**

Retrieve and update the list of extraction policies for the current namespace.

## Function: `create_extraction_graph`

**Arguments:** self, extraction_graph

**Description:**

Create a new extraction graph.

Args:
    - extraction_graph (ExtractionGraph): the extraction graph to create

## Function: `get_content_metadata`

**Arguments:** self, content_id

**Description:**

Get metadata for a specific content ID in a given index.

Args:
    - content_id (str): content id to query

## Function: `download_content`

**Arguments:** self, id

**Description:**

Download content from id. Return bytes

Args:
    - id (str): id of content to download

## Function: `add_documents`

**Arguments:** self, extraction_graphs, documents, doc_id

**Description:**

Add documents to current namespace.

Args:
    - documents (Union[Document, str, List[Union[Document, str]]]): this can be a list of strings, list of Documents or a mix of both

## Function: `delete_documents`

**Arguments:** self, document_ids

**Description:**

Delete documents from current namespace.

Args:
    - document_ids (List[str]): list of document ids to delete

## Function: `update_labels`

**Arguments:** self, document_id, labels

**Description:**

Update labels for a document.

Args:
    - document_id (str): id of document to update
    - labels (Dict[str, str]): labels to update

## Function: `update_content`

**Arguments:** self, document_id, path

**Description:**

Update a piece of content with a new file

Args:
    - path (str): relative path to the file to be uploaded

## Function: `get_structured_data`

**Arguments:** self, content_id

**Description:**

Query metadata for a specific content ID in a given index.

Args:
    - content_id (str): content id to query

## Function: `search_index`

**Arguments:** self, name, query, top_k, filters

**Description:**

Search index in the current namespace.

Args:
    - name (str): name of index to search
    - query (str): query string
    - top_k (int): top k nearest neighbors to be returned
    - filters (List[str]): list of filters to apply

## Function: `upload_file`

**Arguments:** self, extraction_graphs, path, id, labels

**Description:**

Upload a file.

Args:
    - path (str): relative path to the file to be uploaded
    - labels (dict): labels to be associated with the file

## Function: `list_schemas`

**Arguments:** self

**Description:**

List all schemas in the current namespace.

## Function: `get_content_tree`

**Arguments:** self, content_id

**Description:**

Get content tree for a given content id

Args:
    - content_id (str): id of content

## Function: `get_extracted_content`

**Arguments:** self, content_id, level

**Description:**

Get list of child for a given content id and their content up to the specified level.

Args:
- content_id (str): id of content
- level (int): depth of content retrieval (default: 0)

## Function: `sql_query`

**Arguments:** self, query

**Description:**

Execute a SQL query.

Args:
    - query (str): SQL query to be executed

## Function: `ingest_remote_file`

**Arguments:** self, extraction_graphs, url, mime_type, labels, id

**Description:**

None

## Function: `wait_for_extraction`

**Arguments:** self, content_id

**Description:**

Wait for extraction to complete for a given content id

Args:
    - content_id (str): id of content

## Function: `generate_unique_hex_id`

**Arguments:** self

**Description:**

Generate a unique hexadecimal identifier

Returns:
    str: a unique hexadecimal string

## Function: `generate_hash_from_string`

**Arguments:** self, input_string

**Description:**

Generate a hash for the given string and return it as a hexadecimal string.

Args:
    input_string (str): The input string to hash.

Returns:
    str: The hexadecimal hash of the input string.

## Function: `__print_additional_error_context`

**Arguments:** self, error

**Description:**

None

